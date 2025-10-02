import Image from "next/image";
import Link from "next/link";

const primaryLinks = [
  { label: "Documentation", href: "https://github.com/qerun/qerun/tree/dev/docs" },
  { label: "OpenSea Collection", href: "https://opensea.io/collection/pioneer" },
];

const officialAssets = [
  { label: "Qerun.eth", value: "qerun.eth" },
  { label: "Qerun.bnb", value: "qerun.bnb" },
  { label: "Qerun.arb", value: "qerun.arb" },
  { label: "Primary Docs", value: "docs/public" },
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
    <div className="min-h-screen bg-[#120806] text-slate-100">
      <header className="relative isolate overflow-hidden bg-gradient-to-br from-[#f7d976]/25 via-[#2d0e0e] to-[#080302]">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% -10%, rgba(247,217,118,0.45), transparent 55%), radial-gradient(circle at 80% 0%, rgba(139,0,0,0.4), transparent 60%)",
          }}
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 lg:flex-row lg:items-center lg:py-32">
          <div className="flex-1 space-y-8">
            <div className="flex items-center gap-4">
              <Image
                src="/assets/logo.png"
                alt="Qerun crown logo"
                width={96}
                height={96}
                className="drop-shadow-[0_8px_20px_rgba(247,217,118,0.35)]"
                priority
              />
              <span className="inline-flex items-center gap-2 rounded-full border border-[#f7d976]/40 bg-[#f7d976]/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#f9e7a9]">
                Qerun Ecosystem
              </span>
            </div>
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Qerun: First steps toward a decentralized future of trust & freedom.
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
                  className="rounded-full bg-[#f7d976] px-5 py-2 text-sm font-semibold text-[#2d0e0e] transition hover:bg-[#f9e7a9]"
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-16 px-6 py-16">
        <section className="rounded-3xl border border-[#f7d976]/30 bg-[#1a0906]/80 p-8 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur">
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
        </section>

        <section className="grid gap-6 rounded-3xl border border-[#f7d976]/20 bg-[#1a0906]/70 p-8 backdrop-blur md:grid-cols-3">
          <h2 className="text-2xl font-semibold text-white md:col-span-1">What you can do</h2>
          <div className="md:col-span-2 space-y-6 text-sm text-slate-200">
            <div className="rounded-2xl border border-[#f7d976]/25 bg-[#1a0906]/85 p-6 shadow-[0_15px_35px_rgba(0,0,0,0.45)] backdrop-blur space-y-4">
              <h3 className="text-xl font-semibold text-[#f7d976]">Join as a Pioneer</h3>
              <p className="text-sm text-slate-200">
                Earn an honorary Pioneer NFT by reviewing documentation, contributing to QA, or helping the
                community grow—or pick one up on OpenSea to jump in immediately.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  className="rounded-full bg-[#f7d976]/20 px-4 py-2 text-xs font-semibold text-[#f7d976] ring-1 ring-[#f7d976]/40 transition hover:bg-[#f7d976]/30"
                  href="https://github.com/qerun/qerun"
                  target="_blank"
                  rel="noreferrer"
                >
                  Help Review Docs
                </Link>
                <Link
                  className="rounded-full bg-[#f7d976] px-4 py-2 text-xs font-semibold text-[#2d0e0e] transition hover:bg-[#f9e7a9]"
                  href="https://opensea.io/collection/qerun-token"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get a Pioneer NFT
                </Link>
              </div>
            </div>
            <p>
              Qerun is evolving into a web3 service hub where finance workflows feel familiar. Names like
              <span className="font-semibold"> yourname.qerun.bnb</span> keep interactions human, while the DAO treasury rewards
              participation through transparent allocation.
            </p>
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
              <article
                key={item.title}
                className="rounded-2xl border border-[#f7d976]/25 bg-[#1a0906]/80 p-6 shadow-[0_12px_32px_rgba(0,0,0,0.35)] backdrop-blur"
              >
                <h3 className="text-lg font-semibold text-[#f7d976]">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-200">{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-[#f7d976]/20 bg-[#0c0503]/90 py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Qerun DAO — community-owned, security-first finance hub.</p>
          <div className="flex flex-wrap gap-3">
            <Link className="hover:text-[#f7d976]" href="https://github.com/qerun/qerun" target="_blank" rel="noreferrer">
              GitHub
            </Link>
            <Link className="hover:text-[#f7d976]" href="https://x.com/qerun_" target="_blank" rel="noreferrer">
              X (Twitter)
            </Link>
            <Link className="hover:text-[#f7d976]" href="mailto:">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
