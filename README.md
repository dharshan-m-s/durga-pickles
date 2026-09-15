# Durga Foods — Premium Mobile Website + CMS

A React/Vite public website for Durga Foods with a mobile-first admin CMS for products, prices, images, homepage content, contact details and backups.

## What the CMS manages

- Add, edit and delete products
- Edit product name, category, size, description, price and MRP
- Upload or replace product images without changing the original URL by hand
- Choose which products appear in the Home featured collection
- Add, edit and delete Gallery photographs
- Upload or replace gallery images
- Change Home hero copy and both Home collection photographs
- Change phone, consumer-care number, WhatsApp, map link and footer details
- Edit browser title, SEO description and marquee items
- Export and restore a complete JSON backup of CMS content
- Server-only admin password configured through `.env` (never bundled into the React client)
- Responsive CMS layout with touch-sized controls, bottom-sheet editors and mobile navigation

## Run locally

Install dependencies:

```bash
npm install
```

Run the public site and CMS API together:

```bash
npm run dev:all
```

Then open the Vite URL shown in the terminal and visit `/admin`.

Before starting the server, copy `.env.example` to `.env` and set a strong `ADMIN_PASSWORD` (12+ characters; 16+ is recommended). The password is read only by the Express server and is never exposed through Vite's client environment or written to the CMS content backup. The previous browser-based first-time setup has been removed so credentials cannot be created or changed from the public admin UI.

## Production-style run

Build the React app and serve it through the CMS server:

```bash
npm run build
npm start
```

The server listens on port `8787` by default. Set `PORT` when required:

```bash
PORT=8080 npm start
```

## Environment & credentials

The real admin credential belongs in the root `.env` file:

```dotenv
ADMIN_PASSWORD=your-long-random-password
TRUST_PROXY=false
# PORT=8787
```

`.env` is ignored by Git and must never be committed or uploaded with a public repository. A safe placeholder is provided in `.env.example`; replace it before starting the CMS. The server rejects the placeholder and passwords shorter than 12 characters.

## Data storage

CMS content is stored in `server/data/content.json`.

Uploaded CMS images are stored in `server/uploads/` and are served from `/uploads/...`.

Keep both directories in your deployment backup. The CMS Backup page also lets you export the content model as JSON before large changes.

## Security notes

The admin UI is protected by a server-side session cookie and constant-time password comparison. Authentication is rate-limited, sessions expire after 7 days, API responses are not cached, and common security response headers are applied. Run the CMS behind HTTPS in production. Change the admin password by editing the server-only `.env` file and restarting the server.

This package intentionally does not invent product prices, certifications, health claims, awards or other unsupported business facts. Price fields are blank until you enter the real values.

## Original product photography

The supplied product photographs are kept under `public/products/originals/` and are not resized by the CMS.

## CMS UI/UX v6

The admin dashboard is designed mobile-first and includes:
- Dashboard overview with missing-price attention state and quick actions
- Product search, category filtering and price-status filtering
- Product and gallery create/edit/delete flows with image previews
- Inline validation for product prices/MRP
- Homepage/contact/SEO editing with unsaved-change protection and live snapshot preview
- JSON backup/restore workflow
- Toast feedback and purpose-built destructive-action confirmations
- Touch-friendly off-canvas navigation and safe-area support

The CMS server also validates uploaded image signatures, expires sessions after 7 days, throttles failed authentication attempts, validates money fields server-side, avoids caching API responses, removes replaced managed uploads, and ignores the public setup flow entirely.
