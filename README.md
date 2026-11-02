# Rain Energy Limited — website

Corporate website for Rain Energy Limited (rainenergy.ng). Built with TanStack Start, React, Tailwind and
deployed to Cloudflare Workers. All content comes from the Rain Energy Company Profile and Brand Guidelines (2026).

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # tests
npm run lint
```

## Launch on Cloudflare (one-time setup)

1. In Cloudflare: **Workers & Pages → Create → Import a repository** and pick this GitHub repo (branch `main`).
2. Build settings:
   - **Build command:** `npm run build`
   - **Deploy command:** `npm run deploy`
3. Open the Worker's **Settings → Variables and Secrets** and add:
   - `RESEND_API_KEY` — type **Secret**, your key from resend.com
   - `CONTACT_FROM` — e.g. `Rain Energy Website <website@rainenergy.ng>` (the domain must be verified in Resend)
   - `CONTACT_TO` — optional, defaults to `info@rainenergy.ng`
4. **Settings → Domains & Routes → Add custom domain:** `rainenergy.ng` and `www.rainenergy.ng`.
5. Every push to `main` now redeploys automatically.

Until the Resend key is added, the contact form shows a polite "please email us" message instead of failing.

## Logo

The logo is the image used by `src/components/rain/shared.tsx` (`Wordmark`, which uses `src/assets/logo.png`). Replace `src/assets/logo.png`
(also update `public/logo.png`, `public/logo-512.png`, `public/favicon.ico` and `public/og-image.jpg`).

## Content rules

See `AGENTS.md`. No invented statistics, no TIN on the public site, one source of truth in `src/data/content.ts`.
