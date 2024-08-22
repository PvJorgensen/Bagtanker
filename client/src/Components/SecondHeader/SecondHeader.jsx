import { NavLink } from 'react-router-dom'
import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import styles from './secondheader.module.scss'

export const SecondHeader = () => {
  return (
    <header className={styles.scndHeader}>
      <NavLink to='/'>
      <h1>Bagtanker</h1>
      <div className={styles.circle}></div>
      </NavLink>
      <BurgerMenu />
    </header>
  )
}
