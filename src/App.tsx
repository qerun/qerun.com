import styles from './styles/qerunTheme.module.css'

const primaryLinks = [
  { label: 'Token Dashboard(Testnet)', href: 'https://dash.qerun.com' },
  { label: 'Documentation', href: 'https://github.com/qerun/qerun/tree/dev/docs' },
]

const officialAssets = [
  { label: 'Qerun.eth', value: 'qerun.eth' },
  { label: 'Qerun.bnb', value: 'qerun.bnb' },
  { label: 'Qerun.arb', value: 'qerun.arb' },
  { label: 'Primary Docs', value: 'docs/public' },
]

const roadmap = [
  { title: 'MVP Launch', description: 'Core treasury, swap, and governance scaffolding go live for Pioneer members.' },
  { title: 'Service Hub', description: 'Unified dashboard for payments, vaults, alerts, and daily finance tools.' },
  { title: 'Public Rollout', description: 'Open registrations, mobile companions, and merchant integrations.' },
]

export default function App() {
  return (
    <div className={styles.qerunRoot}>
      <header className={styles.qerunHeader}>
        <div className={styles.qerunHeaderOverlay} />
        <div className={styles.qerunHeaderInner}>
          <div className={styles.qerunFlex} style={{ flex: 1 }}>
            <div className={styles.qerunInline}>
              <img src="/assets/logo.png" alt="Qerun crown logo" width={96} height={96} className={styles.qerunLogoShadow} />
              <span className={styles.qerunBadge}>Qerun Ecosystem</span>
            </div>
            <h1 className={styles.qerunHeroTitle}>Qerun: First steps toward a decentralized future of trust &amp; freedom.</h1>
            <p className={styles.qerunLead}>
              Move money, manage vaults, and steer the treasury from a single interface. Qerun wraps transparent smart
              contracts in a familiar, trust-first experience where every service is community-owned.
            </p>
            <div className={styles.qerunBtnRow}>
              {primaryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`${styles.qerunButton} ${styles.qerunButtonRound} ${styles.qerunButtonSm}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main className={styles.qerunMain}>
        <section className={styles.qerunCard}>
          <h2 className={styles.qerunHeading}>Official Registry</h2>
          <p className={`${styles.qerunTextSm} ${styles.qerunTextMuted} ${styles.qerunMarginTop2}`}>
            Verified domains, contracts, and support channels. Always cross-check before signing transactions.
          </p>
          <dl className={styles.qerunList}>
            {officialAssets.map((item) => (
              <div key={item.label} className={styles.qerunListRow}>
                <dt className={`${styles.qerunTextSemi} ${styles.qerunText}`}>{item.label}</dt>
                <dd className={styles.qerunTextMuted}>{item.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className={styles.qerunCard}>
          <h2 className={styles.qerunHeadingXl}>What you can do</h2>
          <div className={`${styles.qerunVStackLg} ${styles.qerunTextSm} ${styles.qerunTextMuted}`}>
            <p>
              Qerun is evolving into a web3 service hub where finance workflows feel familiar. Names like
              <span className={styles.qerunTextSemi}> yourname.qerun.bnb</span> keep interactions human, while the DAO treasury rewards
              participation through transparent allocation and contributor bounties.
            </p>
            <p>
              Community members can propose features, ship integrations, author playbooks, and host meetups. Every verifiable
              contribution feeds contributor scores that steer grant unlocks, beta onboarding, and premium support tiers.
            </p>
            <p>
              Limited-run NFTs commemorate product milestones, certify verified partners, and unlock collectible perks—use them
              to access beta drops, loyalty boosts, and in-person event passes across the Qerun ecosystem.
            </p>
          </div>
        </section>

        <section>
          <h2 className={styles.qerunHeadingXl}>Roadmap Highlights</h2>
          <p className={`${styles.qerunMarginTop2} ${styles.qerunTextSm} ${styles.qerunTextMuted}`}>
            Each milestone is driven by governance proposals. Expect iterative releases, heavy user testing, and open documentation for every upgrade.
          </p>
          <div className={`${styles.qerunCards} ${styles.qerunMarginTop6}`}>
            {roadmap.map((item) => (
              <article key={item.title} className={`${styles.qerunCard} ${styles.qerunCardVH}`}>
                <div className={styles.qerunCardContent}>
                  <h3 className={`${styles.qerunGoldText} ${styles.qerunHeading}`}>{item.title}</h3>
                  <p className={`${styles.qerunTextSm} ${styles.qerunTextMuted}`}>{item.description}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.qerunFooter}>
        <div className={styles.qerunFooterInner}>
          <p>© {new Date().getFullYear()} Qerun DAO — community-owned, security-first finance hub.</p>
          <div className={styles.qerunBtnRow}>
            <a className={styles.qerunLink} href="https://github.com/qerun/qerun" target="_blank" rel="noreferrer">GitHub</a>
            <a className={styles.qerunLink} href="https://x.com/qerun_" target="_blank" rel="noreferrer">X (Twitter)</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
