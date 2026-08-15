import Stripe from 'stripe';

// ============================================================================
// Stripe Webhook → Shopify Order Sync
// ============================================================================
// This Vercel serverless function receives Stripe `checkout.session.completed`
// webhooks, verifies them, and creates a corresponding order in Shopify via
// the Admin REST API. This triggers Shopify's built-in order notifications.
// ============================================================================

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Product mapping: maps Stripe Payment Link metadata to Shopify order details
const PRODUCT_MAP = {
  'cleaning-planner': {
    title: 'ADHD-Friendly Daily Cleaning Planner',
    price: '29.99',
    sku: 'SHORA-ADHD-PLANNER',
  },
  'food-swaps': {
    title: 'Done For You Guide on 30 Healthy Food Swaps',
    price: '19.99',
    sku: 'SHORA-FOOD-SWAPS',
  },
};

/**
 * Creates an order in Shopify Admin using the REST API.
 * Uses custom line_items (title + price) — no Shopify products needed.
 */
async function createShopifyOrder(session) {
  const shopifyDomain = process.env.SHOPIFY_STORE_DOMAIN;
  const accessToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;

  // Extract customer info from Stripe session
  const customerEmail = session.customer_details?.email || session.customer_email || '';
  const customerName = session.customer_details?.name || '';
  const [firstName, ...lastParts] = customerName.split(' ');
  const lastName = lastParts.join(' ') || '';

  // Determine which product was purchased from metadata or line items
  const productId = session.metadata?.product_id || null;
  const product = productId && PRODUCT_MAP[productId] ? PRODUCT_MAP[productId] : null;

  // Build line_items — either from our product map or from Stripe session data
  let lineItems;
  if (product) {
    lineItems = [
      {
        title: product.title,
        quantity: parseInt(session.metadata?.quantity, 10) || 1,
        price: product.price,
        sku: product.sku,
        requires_shipping: false, // Digital product
        taxable: false,
      },
    ];
  } else {
    // Fallback: create a generic line item from Stripe amount
    const amountTotal = session.amount_total ? (session.amount_total / 100).toFixed(2) : '0.00';
    lineItems = [
      {
        title: 'Shoraminimalist Digital Product',
        quantity: 1,
        price: amountTotal,
        requires_shipping: false,
        taxable: false,
      },
    ];
  }

  // Build the Shopify order payload
  const orderPayload = {
    order: {
      line_items: lineItems,
      email: customerEmail,
      financial_status: 'paid', // Already paid via Stripe
      fulfillment_status: 'fulfilled', // Digital product — auto-fulfilled
      send_receipt: true, // Send order confirmation email
      send_fulfillment_receipt: true, // Send fulfillment notification
      note: `Stripe Payment ID: ${session.payment_intent || session.id}`,
      note_attributes: [
        { name: 'stripe_session_id', value: session.id },
        { name: 'stripe_payment_intent', value: session.payment_intent || '' },
        { name: 'source', value: 'shoraminimalist.com' },
      ],
      tags: 'stripe, website-order',
      customer: {
        first_name: firstName || 'Customer',
        last_name: lastName || '',
        email: customerEmail,
      },
      // Include billing address if available from Stripe
      ...(session.customer_details?.address && {
        billing_address: {
          first_name: firstName || 'Customer',
          last_name: lastName || '',
          address1: session.customer_details.address.line1 || '',
          address2: session.customer_details.address.line2 || '',
          city: session.customer_details.address.city || '',
          province: session.customer_details.address.state || '',
          country: session.customer_details.address.country || '',
          zip: session.customer_details.address.postal_code || '',
        },
      }),
    },
  };

  // Call Shopify Admin REST API to create the order
  const apiVersion = '2026-07';
  const url = `https://${shopifyDomain}/admin/api/${apiVersion}/orders.json`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': accessToken,
    },
    body: JSON.stringify(orderPayload),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    console.error('Shopify API Error:', response.status, errorBody);
    throw new Error(`Shopify API error: ${response.status} — ${errorBody}`);
  }

  const data = await response.json();
  console.log('Shopify order created successfully:', data.order?.id, data.order?.name);
  return data;
}

/**
 * Check if an order with this Stripe session ID already exists in Shopify.
 * Prevents duplicate orders if Stripe sends the webhook more than once.
 */
async function checkDuplicateOrder(stripeSessionId) {
  const shopifyDomain = process.env.SHOPIFY_STORE_DOMAIN;
  const accessToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;
  const apiVersion = '2026-07';

  // Search for orders tagged with this Stripe session ID
  const url = `https://${shopifyDomain}/admin/api/${apiVersion}/orders.json?status=any&tag=stripe&limit=10`;

  try {
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Access-Token': accessToken,
      },
    });

    if (!response.ok) return false;

    const data = await response.json();
    const orders = data.orders || [];

    // Check if any order has this Stripe session ID in note_attributes
    return orders.some((order) => {
      const attrs = order.note_attributes || [];
      return attrs.some(
        (attr) => attr.name === 'stripe_session_id' && attr.value === stripeSessionId
      );
    });
  } catch (err) {
    console.error('Error checking for duplicate orders:', err);
    return false; // Allow order creation on error to avoid lost orders
  }
}

// ============================================================================
// Vercel Serverless Handler
// ============================================================================

export const config = {
  api: {
    bodyParser: false, // Stripe needs the raw body for signature verification
  },
};

/**
 * Reads the raw request body as a Buffer.
 * Required for Stripe webhook signature verification.
 */
function getRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (chunk) => chunks.push(chunk));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify required environment variables
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    console.error('Missing Stripe environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }
  if (!process.env.SHOPIFY_STORE_DOMAIN || !process.env.SHOPIFY_ADMIN_ACCESS_TOKEN) {
    console.error('Missing Shopify environment variables');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    // 1. Read the raw body for signature verification
    const rawBody = await getRawBody(req);
    const signature = req.headers['stripe-signature'];

    if (!signature) {
      return res.status(400).json({ error: 'Missing stripe-signature header' });
    }

    // 2. Verify the webhook signature
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        rawBody,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message);
      return res.status(400).json({ error: `Webhook signature error: ${err.message}` });
    }

    // 3. Handle the checkout.session.completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      console.log('Processing checkout.session.completed:', session.id);

      // 4. Check for duplicate orders (idempotency)
      const isDuplicate = await checkDuplicateOrder(session.id);
      if (isDuplicate) {
        console.log('Duplicate order detected, skipping:', session.id);
        return res.status(200).json({ received: true, status: 'duplicate_skipped' });
      }

      // 5. Create the order in Shopify
      await createShopifyOrder(session);

      console.log('Order synced to Shopify successfully for session:', session.id);
      return res.status(200).json({ received: true, status: 'order_created' });
    }

    // For other event types, acknowledge receipt
    console.log('Unhandled event type:', event.type);
    return res.status(200).json({ received: true, status: 'event_ignored' });
  } catch (err) {
    console.error('Webhook handler error:', err);
    // Return 200 to prevent Stripe from retrying on app errors
    // (retries would create duplicate orders)
    return res.status(200).json({ received: true, status: 'error', message: err.message });
  }
}
