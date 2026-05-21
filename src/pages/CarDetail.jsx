import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { getFuelLabel, getTransmissionLabel } from "../constants/car.constants";
import { getCarById } from '../api/fakeCarsApi';
import Loader from '../components/Loader';

function CarDetail() {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        (async () => {
            try {
                const data = await getCarById(id);
                setCar(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        })();
    }, [id]);

    if (loading) return <Loader />;
    if (error) return <p style={{ color: 'red', padding: '20px' }}>Ошибка: {error}</p>;

    if (!car) return <p>Машина не найдена</p>

    const fuelLabel = getFuelLabel(car.fuel);
    const transmissionLabel = getTransmissionLabel(car.transmission);

    return (
        <div>
            <h1>{car.brand} {car.model}</h1>
            <p>Год: {car.year}</p>
            <p>Цена: {car.price.toLocaleString()} ₸</p>
            <p>Пробег: {car.mileage.toLocaleString()} км</p>
            <p>Топливо: {fuelLabel}</p>
            <p>Коробка: {transmissionLabel}</p>
        </div>
    )
}

export default CarDetail