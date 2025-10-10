# Qerun.com

Landing site for the Qerun ecosystem. The goal is to provide a trustworthy, fintech-grade entry point with official registries, roadmap highlights, and links to the service hub.

## Development

```bash
npm install
npm run dev
```

Visit http://localhost:5173 to preview changes. Styling comes from `src/styles/qerunTheme.module.css`; the main UI lives in `src/App.tsx` and is mounted by `src/main.tsx`.

## Deployment

- Build locally: `npm run build` (outputs to `dist/`)
- Deploy: serve the `dist/` directory with any static host or pin it to IPFS and update your ENS/BNB records.

## Brand & Assets

- Official logo source: `assets/logo/` (planned)
- Favicon/coin icons: generate clip-art variants of the crown emblem for web and wallet usage.

Always verify new links, contracts, or collections with the on-chain registry and append them to the “Official Registry” list rendered on the homepage.
