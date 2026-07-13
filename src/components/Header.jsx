import { Link } from 'react-router-dom'
import styles from '../styles/Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/" >Главная</Link>
      <Link to="/cart" >Корзина</Link>
      <Link to="/history" >История покупок</Link>
      <Link to="/sell" >Продать авто</Link>
    </header>
  )
}

export default Header