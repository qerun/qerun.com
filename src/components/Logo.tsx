import React from 'react'
import styles from '../styles/qerunTheme.module.css'

export default function Logo() {
  return (
    <div className={styles.qerunLogoContainer}>
      <img
        src="/assets/logo.png"
        alt="Qerun crown logo"
        width={96}
        height={96}
        className={styles.qerunLogo}
      />
    </div>
  )
}

