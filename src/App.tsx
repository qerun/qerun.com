import styles from './styles/qerunTheme.module.css'
import Logo from './components/Logo'

export default function App() {
  return (
    <div className={styles.qerunRoot}>
      <Logo />

      {/* Hero and Registry side-by-side */}
        <section className={styles.qerunCard}>
          <span className={styles.qerunBadge}>Qerun Ecosystem</span>
          <h1 className={styles.qerunHeroTitle}>Qerun: First steps toward a decentralized future of trust &amp; freedom.</h1>
          <p className={styles.qerunLead}>
            Move money, manage vaults, and steer the treasury from a single interface. Qerun wraps transparent smart
            contracts in a familiar, trust-first experience where every service is community-owned.
          </p>
          <div className={styles.qerunBtnRow}>
            <a
              href="https://dash.qerun.com"
              className={`${styles.qerunButton} ${styles.qerunButtonRound} ${styles.qerunButtonSm}`}
              target="_blank"
              rel="noreferrer"
            >
              Token Dashboard(Testnet)
            </a>
            <a
              href="https://github.com/qerun/qerun/tree/dev/docs"
              className={`${styles.qerunButton} ${styles.qerunButtonRound} ${styles.qerunButtonSm}`}
              target="_blank"
              rel="noreferrer"
            >
              Documentation
            </a>
          </div>
        </section>

        <section className={styles.qerunCard}>
          <h2 className={styles.qerunHeading}>Official Registry</h2>
          <p className={`${styles.qerunTextSm} ${styles.qerunTextMuted} ${styles.qerunMarginTop2}`}>
            Verified domains, contracts, and support channels. Always cross-check before signing transactions.
          </p>
          <dl className={styles.qerunList}>
            <div className={styles.qerunListRow}>
              <dt className={`${styles.qerunTextSemi} ${styles.qerunText}`}>Qerun.eth</dt>
              <dd className={styles.qerunTextMuted}>qerun.eth</dd>
            </div>
            <div className={styles.qerunListRow}>
              <dt className={`${styles.qerunTextSemi} ${styles.qerunText}`}>Qerun.bnb</dt>
              <dd className={styles.qerunTextMuted}>qerun.bnb</dd>
            </div>
            <div className={styles.qerunListRow}>
              <dt className={`${styles.qerunTextSemi} ${styles.qerunText}`}>Qerun.arb</dt>
              <dd className={styles.qerunTextMuted}>qerun.arb</dd>
            </div>
            <div className={styles.qerunListRow}>
              <dt className={`${styles.qerunTextSemi} ${styles.qerunText}`}>Primary Docs</dt>
              <dd className={styles.qerunTextMuted}>docs/public</dd>
            </div>
          </dl>
        </section>

      {/* What you can do */}
        <section className={`${styles.qerunCard} ${styles.qerunCardWide}`}>
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

      {/* Roadmap */}
        <section className={`${styles.qerunCard} ${styles.qerunCardWide}`}>
          <h2 className={styles.qerunHeadingXl}>Roadmap Highlights</h2>
          <p className={`${styles.qerunMarginTop2} ${styles.qerunTextSm} ${styles.qerunTextMuted}`}>
            Each milestone is driven by governance proposals. Expect iterative releases, heavy user testing, and open documentation for every upgrade.
          </p>
          <div className={`${styles.qerunCards}`}>
            <article className={`${styles.qerunCard}`}>
              <div className={styles.qerunCardContent}>
                <h3 className={`${styles.qerunGoldText} ${styles.qerunHeading}`}>MVP Launch</h3>
                <p className={`${styles.qerunTextSm} ${styles.qerunTextMuted}`}>
                  Core treasury, swap, and governance scaffolding go live for Pioneer members.
                </p>
              </div>
            </article>
            <article className={`${styles.qerunCard}`}>
              <div className={styles.qerunCardContent}>
                <h3 className={`${styles.qerunGoldText} ${styles.qerunHeading}`}>Service Hub</h3>
                <p className={`${styles.qerunTextSm} ${styles.qerunTextMuted}`}>
                  Unified dashboard for payments, vaults, alerts, and daily finance tools.
                </p>
              </div>
            </article>
            <article className={`${styles.qerunCard}`}>
              <div className={styles.qerunCardContent}>
                <h3 className={`${styles.qerunGoldText} ${styles.qerunHeading}`}>Public Rollout</h3>
                <p className={`${styles.qerunTextSm} ${styles.qerunTextMuted}`}>
                  Open registrations, mobile companions, and merchant integrations.
                </p>
              </div>
            </article>
          </div>
        </section>

      {/* Footer */}
        <section className={`${styles.qerunCard}`}>
          <p>© {new Date().getFullYear()} Qerun DAO — community-owned, security-first finance hub.</p>
          <div className={styles.qerunBtnRow}>
            <a className={styles.qerunLink} href="https://github.com/qerun/qerun" target="_blank" rel="noreferrer">GitHub</a>
            <a className={styles.qerunLink} href="https://x.com/qerun_" target="_blank" rel="noreferrer">X (Twitter)</a>
          </div>
        </section>
      </div>
  )
}
