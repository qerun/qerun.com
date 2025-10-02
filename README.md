# Qerun.com

Landing site for the Qerun ecosystem. The goal is to provide a trustworthy, fintech-grade entry point with official registries, roadmap highlights, and links to the service hub.

## Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000 to preview changes. Tailwind CSS is preconfigured; page content lives in `src/app/page.tsx`.

## Deployment

- Build locally: `npm run build`
- Export static assets for IPFS/ENS: `npm run build && npx next export`
- Deploy using Vercel or pin the static `out/` directory to IPFS and update your ENS/BNB records.

## Brand & Assets

- Official logo source: `assets/logo/` (planned)
- Favicon/coin icons: generate clip-art variants of the crown emblem for web and wallet usage.

Always verify new links, contracts, or collections with the on-chain registry and append them to the “Official Registry” list rendered on the homepage.
