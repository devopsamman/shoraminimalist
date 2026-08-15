// ============================================================================
// One-Time OAuth Callback — Exchange code for Access Token
// ============================================================================
// DELETE THIS FILE after getting your token!
// ============================================================================

export default async function handler(req, res) {
  const { code, shop } = req.query;

  if (!code || !shop) {
    return res.status(400).send(`
      <h1>Error</h1>
      <p>Missing code or shop parameter. Please start the OAuth flow again.</p>
      <a href="/api/auth/shopify">Restart OAuth</a>
    `);
  }

  const clientId = process.env.SHOPIFY_CLIENT_ID;
  const clientSecret = process.env.SHOPIFY_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    return res.status(500).send(`
      <h1>Missing Environment Variables</h1>
      <p>Please add SHOPIFY_CLIENT_ID and SHOPIFY_CLIENT_SECRET to Vercel.</p>
    `);
  }

  try {
    // Exchange the authorization code for an access token
    const tokenResponse = await fetch(`https://${shop}/admin/oauth/access_token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code: code,
      }),
    });

    if (!tokenResponse.ok) {
      const errorText = await tokenResponse.text();
      return res.status(500).send(`
        <h1>Token Exchange Failed</h1>
        <p>Error: ${errorText}</p>
        <a href="/api/auth/shopify">Try again</a>
      `);
    }

    const data = await tokenResponse.json();
    const accessToken = data.access_token;

    // Display the token for the user to copy
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
      <head><title>Shopify Access Token</title></head>
      <body style="font-family: system-ui; max-width: 600px; margin: 40px auto; padding: 20px;">
        <h1 style="color: #22c55e;">✅ Success!</h1>
        <p>Your Shopify Admin API Access Token:</p>
        <div style="background: #1a1a2e; color: #22c55e; padding: 16px; border-radius: 8px; font-family: monospace; word-break: break-all; font-size: 14px;">
          ${accessToken}
        </div>
        <br>
        <h2>Next Steps:</h2>
        <ol>
          <li>Copy the token above</li>
          <li>Go to <strong>Vercel Dashboard → Settings → Environment Variables</strong></li>
          <li>Add it as <strong>SHOPIFY_ADMIN_ACCESS_TOKEN</strong></li>
          <li><strong>DELETE</strong> the files <code>api/auth/shopify.js</code> and <code>api/auth/callback.js</code> from your project</li>
          <li>Redeploy</li>
        </ol>
        <p style="color: #ef4444; font-weight: bold;">⚠️ Do NOT share this token with anyone!</p>
      </body>
      </html>
    `);
  } catch (err) {
    res.status(500).send(`
      <h1>Error</h1>
      <p>${err.message}</p>
      <a href="/api/auth/shopify">Try again</a>
    `);
  }
}
