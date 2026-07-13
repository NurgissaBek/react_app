import { useState, useEffect } from 'react';
import { getCars } from '../api/fakeCarsApi';
import { FUEL_TYPES } from "../constants/car.constants";
import CarCard from "./CarCard";
import Loader from './Loader';
import Pagination from './Pagination';
import _ from 'lodash';
import styles from '../styles/CarList.module.scss';

const CARDS_PER_PAGE = 10;

const CarsList = () => {
    const [cars, setCars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        (async () => {
            try {
                const data = await getCars();
                setCars(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    if (loading) return <Loader />;
    if (error) return <p>Ошибка: {error}</p>;
    const totalPages = Math.ceil(cars.length / CARDS_PER_PAGE);
    const currentCars = _.chunk(cars, CARDS_PER_PAGE)[currentPage - 1] ?? [];

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <div className={styles.grid}>
                {currentCars.map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    )

};

export default CarsList;