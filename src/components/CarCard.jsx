import styles from '../styles/CarCard.module.scss'
import { useNavigate } from "react-router-dom";
import { getFuelLabel, getTransmissionLabel } from "../constants/car.constants";
import AddToCartButton from './AddToCartButton';

function CarCard({ car }) {
    const navigate = useNavigate();
    const fuelLabel = getFuelLabel(car.fuel);
    const transmissionLabel = getTransmissionLabel(car.transmission);
    return (
        <div className={styles.card}>
            <h2>{car.brand} {car.model}</h2>
            <p>Год: {car.year}</p>
            <p>Цена: {car.price.toLocaleString()} ₸</p>
            <p>Пробег: {car.mileage.toLocaleString()} км</p>
            <p>Топливо: {fuelLabel}</p>
            <p>Коробка: {transmissionLabel}</p>
            <button onClick={() => navigate(`/cars/${car.id}`)}>
                Перейти
            </button>
            <AddToCartButton car={car} />
        </div>
    )
}

export default CarCard