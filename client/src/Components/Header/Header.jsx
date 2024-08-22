import React from 'react'
import styles from './header.module.scss'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <NavLink to='/'>
      <h1>Bagtanker</h1>
      <div className={styles.circle}></div>
      </NavLink>
      <BurgerMenu></BurgerMenu>
    </header>
  )
}
