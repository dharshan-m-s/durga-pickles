# Durga Foods CMS — Security Notes

## Admin credential
The admin password is configured only on the server through the root `.env` file:

```dotenv
ADMIN_PASSWORD=your password
```

The value is never exposed through Vite because it is not prefixed with `VITE_`, and the server does not return the password through any API. `.env` is ignored by Git.

Use at least 12 characters; 16–24+ random characters are recommended.

## Production
Run the CMS behind HTTPS. Set `NODE_ENV=production` so the session cookie receives the `Secure` flag. If a trusted reverse proxy is used, set `TRUST_PROXY=true`.

Do not publish:
- `.env`
- `server/data/content.json` without a backup policy
- `server/uploads/` without a backup policy

## Authentication
The server uses:
- HTTP-only session cookies
- SameSite=Lax cookies
- 7-day session expiry
- rate limiting for failed login attempts
- constant-time comparison of the configured password digest
- generic authentication failure messages

## Uploads
Uploaded files are limited to 20 MB, restricted to image MIME types, then checked against common file signatures before they are accepted. Managed uploads are removed when replaced or deleted through the CMS.

## Backups
CMS JSON exports contain website content only. They do not contain the admin password or active sessions.
