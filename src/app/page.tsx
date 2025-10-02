import Image from "next/image";
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
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-yellow-500/15 via-slate-900 to-slate-950">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at top, rgba(255,215,0,0.3), transparent 60%)",
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 lg:flex-row lg:items-center lg:py-32">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/logo.png"
                alt="Qerun crown logo"
                width={88}
                height={88}
                className="drop-shadow-lg"
                priority
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-yellow-400/40 bg-yellow-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-200">
                Qerun Ecosystem
              </span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Qerun: Web3 finance with the polish of a premium fintech.
            </h1>
            <p className="max-w-2xl text-base text-slate-200 sm:text-lg">
              Move money, manage vaults, and steer the treasury from a single interface. Qerun wraps
              transparent smart contracts in a familiar, trust-first experience where every service is
              community-owned.
            </p>
            <div className="flex flex-wrap gap-3">
              {primaryLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-yellow-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-3xl border border-yellow-500/30 bg-black/60 p-8 shadow-xl backdrop-blur">
              <h2 className="text-lg font-semibold text-white">Official Registry</h2>
              <p className="mt-2 text-sm text-slate-300">
                Verified domains, contracts, and support channels. Always cross-check before signing transactions.
              </p>
              <dl className="mt-6 space-y-3 text-sm">
                {officialAssets.map((item) => (
                  <div key={item.label} className="flex justify-between gap-4 border-b border-white/5 pb-3">
                    <dt className="font-medium text-slate-100">{item.label}</dt>
                    <dd className="text-slate-300">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-16 px-6 py-16">
        <section className="grid gap-6 rounded-3xl border border-white/10 bg-black/50 p-8 backdrop-blur md:grid-cols-3">
          <h2 className="text-2xl font-semibold text-white md:col-span-1">What you can do</h2>
          <div className="md:col-span-2 space-y-6 text-sm text-slate-200">
            <p>
              Qerun is evolving into a web3 service hub where finance workflows feel familiar. Names like
              <span className="font-semibold"> yourname.qerun.bnb</span> keep interactions human, while the DAO treasury rewards
              participation through transparent allocation.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Send and receive stablecoins with status updates and notifications.</li>
              <li>Pool capital into strategy vaults and track yield flowing back to the treasury.</li>
              <li>Launch or vote on new services in minutes instead of weeks.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-white">Roadmap Highlights</h2>
          <p className="mt-2 text-sm text-slate-200">
            Each milestone is driven by governance proposals. Expect iterative releases, heavy user testing,
            and open documentation for every upgrade.
          </p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {roadmap.map((item) => (
              <article key={item.title} className="rounded-2xl border border-yellow-500/20 bg-black/60 p-6 shadow-lg backdrop-blur">
                <h3 className="text-lg font-semibold text-yellow-200">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-200">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-yellow-500/40 bg-yellow-500/10 p-8 text-sm text-yellow-100">
          <h2 className="text-2xl font-semibold text-white">Stay Aligned</h2>
          <p className="mt-3">
            Counterfeit domains and NFT collections exist. Verify everything through the official registry
            or the constitution repo, and subscribe to governance announcements. Press/partnerships:
            <span className="font-semibold"> support@qerun.com</span>.
          </p>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-black/80 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Qerun DAO — community-owned, security-first finance hub.</p>
          <div className="flex flex-wrap gap-3">
            <Link
              className="hover:text-yellow-300"
              href="https://github.com/qerun/qerun"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </Link>
            <Link
              className="hover:text-yellow-300"
              href="https://x.com/qerun"
              target="_blank"
              rel="noreferrer"
            >
              X (Twitter)
            </Link>
            <Link className="hover:text-yellow-300" href="mailto:support@qerun.com">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
