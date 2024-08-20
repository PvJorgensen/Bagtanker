import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import styles from './secondheader.module.scss'

export const SecondHeader = () => {
  return (
    <header className={styles.scndHeader}>
      <h1>Bagtanker</h1>
      <div className={styles.circle}></div>
      <BurgerMenu />
    </header>
  )
}
