import React from 'react'
import styles from './categorynav.module.scss'

export const CategoryNav = () => {
  return (
    <>
      <nav className={styles.navMain}>
        <ul>
          <li className={styles.active}>RUNDSTYKKER</li>
          <li>BAGUETTES</li>
          <li>FRANSKBRØD</li>
          <li>KAGER</li>
          <li>RUGBRØD</li>
        </ul>
      </nav>
    </>
  )
}
