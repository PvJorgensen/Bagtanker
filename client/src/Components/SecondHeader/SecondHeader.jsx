import { BurgerMenu } from '../BurgerMenu/BurgerMenu'
import styles from './secondheader.module.scss'
import backgroundImg from '../../assets/Images/bread-full04.jpeg'

export const SecondHeader = () => {
  return (
    <header className={styles.scndHeader}>
        <div className={styles.headerWrapper}>
      <h1>Bagtanker</h1>
      <div className={styles.circle}></div>
      <BurgerMenu></BurgerMenu>
      </div>
      <img src={backgroundImg} alt="" />
    </header>
  )
}
