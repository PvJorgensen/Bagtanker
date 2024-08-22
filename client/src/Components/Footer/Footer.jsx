import React from 'react'
import styles from './footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.content}>
      </div>
      <footer className={styles.footerMain}>
        <section>
          <h4>Bagtanker</h4>
          <p>Øster Uttrupvej 1 <br />9000 Aalborg</p>
          <p>Tlf: 12345678 <br />Email: Info@bagtanker.dk</p>
        </section>
        <section>
          <h3>Tilmeld dig Bagtankers nyhedsbrev</h3>
          <p>Få vores nyheder direkte i din indbakke</p>
          <input type="text" placeholder='Indtast din email' />
          <button>TILMELD</button>
        </section>
      </footer>
    </div>
  )
}
