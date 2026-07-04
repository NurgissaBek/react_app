import CarCard from '../components/CarCard'
import styles from '../styles/home.module.scss'
import CarsList from '../components/CarList'

function Home() {
    return (
        <div className={styles.home}>
            <h1>Главная страница</h1>
            <CarsList />
        </div>
    )
}

export default Home