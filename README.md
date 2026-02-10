# Silent Hello Website

This repository contains a static website for the **Silent Hello** Android app.

## Enable GitHub Pages

1. Push this repository to GitHub.
2. Open your repository on GitHub.
3. Go to **Settings** → **Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**.
5. Select your publishing branch (usually `main`) and folder (`/root`).
6. Save your changes.
7. Wait for GitHub Pages to publish. Your site URL will appear in the Pages settings.

## Connect a custom domain later

1. In **Settings** → **Pages**, open the **Custom domain** field.
2. Enter your domain (for example, `www.yourdomain.com`) and save.
3. In your domain DNS provider, add the records required by GitHub Pages:
   - A `CNAME` record for subdomains like `www`.
   - Or `A`/`ALIAS` records for apex/root domains.
4. Wait for DNS propagation.
5. Enable **Enforce HTTPS** in GitHub Pages after the certificate is issued.

## Local preview

Open `index.html` in your browser directly, or run any simple static file server in this folder.
