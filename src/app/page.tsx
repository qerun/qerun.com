import Link from "next/link";

const primaryLinks = [
  { label: "Documentation", href: "https://github.com/qerun/qerun/tree/dev/docs" },
  { label: "Portal (alpha)", href: "https://portal.qerun.eth.limo" },
  { label: "Contracts Workspace", href: "https://github.com/qerun/qerun-contracts" },
];

const officialAssets = [
  { label: "Qerun.eth", value: "qerun.eth" },
  { label: "Qerun.bnb", value: "qerun.bnb" },
  { label: "Qerun.arb", value: "qerun.arb" },
  { label: "Primary Docs", value: "docs/public" },
  { label: "NFT Collection", value: "TBA (on-chain announcement)" },
  { label: "Support", value: "support@qerun.com" },
];

const roadmap = [
  {
    title: "MVP Launch",
    description: "Core treasury, swap, and governance scaffolding go live for Pioneer members.",
  },
  {
    title: "Service Hub",
    description: "Unified dashboard for payments, vaults, alerts, and daily finance tools.",
  },
  {
    title: "Public Rollout",
    description: "Open registrations, mobile companions, and merchant integrations.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-emerald-500/20 via-slate-900 to-slate-950">
        <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 py-24 lg:flex-row lg:items-center lg:py-32">
          <div className="flex-1 space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200">
              Qerun Ecosystem
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              A decentralized finance hub that feels like your favorite fintech app.
            </h1>
            <p className="max-w-xl text-base text-slate-200 sm:text-lg">
              Qerun blends web3 transparency with intuitive UX. Manage daily payments, pooled
              treasury operations, and governance decisions from one streamlined interface.
            </p>
            <div className="flex flex-wrap gap-3">
              {primaryLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-lg backdrop-blur">
              <h2 className="text-lg font-semibold text-white">Official Registry</h2>
              <p className="mt-2 text-sm text-slate-200">
                Verified domains, repos, and support channels. If it&apos;s not listed here, it&apos;s not Qerun.
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                {officialAssets.map((item) => (
                  <div key={item.label} className="flex justify-between gap-4 border-b border-white/10 pb-3">
                    <dt className="font-medium text-slate-100">{item.label}</dt>
                    <dd className="text-slate-300">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-16 px-6 py-16">
        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:grid-cols-3">
          <h2 className="text-2xl font-semibold text-white md:col-span-1">What you can do</h2>
          <div className="md:col-span-2 space-y-6 text-sm text-slate-200">
            <p>
              Qerun is evolving into a service hub for on-chain finance. Expect daily-money tools,
              automated treasury allocation, and human-readable identities (`yourname.qerun.bnb`) that
              make crypto interactions as familiar as using your bank app.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Send and receive stablecoins with clear status tracking.</li>
              <li>Pool funds into community vaults and watch treasury revenue flow transparently.</li>
              <li>Vote on upgrades, fees, and service launches directly from the same dashboard.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">Roadmap Highlights</h2>
          <p className="mt-2 text-sm text-slate-200">
            Each milestone is proposed, debated, and approved by the Qerun DAO. Timelines may shift as
            community priorities evolve.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {roadmap.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-200">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-emerald-400/30 bg-emerald-500/10 p-8 text-sm text-emerald-100">
          <h2 className="text-2xl font-semibold text-white">Stay Aligned</h2>
          <p className="mt-3">
            Beware of counterfeit domains and NFTs claiming to be Qerun. Always verify through this
            registry and the constitution. For press or partnership inquiries email
            <span className="font-semibold"> support@qerun.com</span>.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80 py-6">
        <div className="mx-auto flex max-w-5xl flex-col gap-2 px-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Qerun DAO. Community-owned, security-first finance hub.</p>
          <div className="flex flex-wrap gap-3">
            <Link className="hover:text-emerald-300" href="https://github.com/qerun/qerun" target="_blank" rel="noreferrer">
              GitHub
            </Link>
            <Link className="hover:text-emerald-300" href="https://x.com/qerun" target="_blank" rel="noreferrer">
              X (Twitter)
            </Link>
            <Link className="hover:text-emerald-300" href="mailto:support@qerun.com">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
