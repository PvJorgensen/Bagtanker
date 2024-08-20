import React from 'react'
import styles from './header.module.scss'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'

export const Header = () => {
  return (
    <header>
      <h1>Bagtanker</h1>
      <div className={styles.circle}></div>
      <BurgerMenu></BurgerMenu>
    </header>
  )
}
