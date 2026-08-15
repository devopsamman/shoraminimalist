// ============================================================================
// One-Time OAuth Setup — Get Shopify Access Token
// ============================================================================
// This temporary endpoint handles the Shopify OAuth flow to obtain
// the Admin API Access Token. DELETE THIS FILE after getting your token.
// ============================================================================
//
// USAGE:
// 1. Deploy to Vercel (git push)
// 2. Visit: https://shoraminimalist.com/api/auth/shopify
// 3. Approve the app on Shopify
// 4. Copy the access token shown on screen
// 5. Add it to Vercel env vars as SHOPIFY_ADMIN_ACCESS_TOKEN
// 6. DELETE this file and api/auth/callback.js
// ============================================================================

export default async function handler(req, res) {
  const clientId = process.env.SHOPIFY_CLIENT_ID;
  const shopDomain = process.env.SHOPIFY_STORE_DOMAIN;
  const redirectUri = `https://shoraminimalist.com/api/auth/callback`;
  const scopes = 'read_orders,write_orders';

  if (!clientId || !shopDomain) {
    return res.status(500).send(`
      <h1>Missing Environment Variables</h1>
      <p>Please add these to Vercel Dashboard → Settings → Environment Variables:</p>
      <ul>
        <li><strong>SHOPIFY_CLIENT_ID</strong> — Your app's Client ID</li>
        <li><strong>SHOPIFY_STORE_DOMAIN</strong> — e.g., shoraminimalist-liaekvha.myshopify.com</li>
      </ul>
    `);
  }

  // Redirect to Shopify OAuth authorization page
  const authUrl = `https://${shopDomain}/admin/oauth/authorize?client_id=${clientId}&scope=${scopes}&redirect_uri=${encodeURIComponent(redirectUri)}`;

  res.redirect(302, authUrl);
}
