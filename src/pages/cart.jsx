import { useState } from 'react';
import { getCart, removeFromCart } from '../utils/cart_utils';
import { getFuelLabel, getTransmissionLabel } from '../constants/car.constants';
import styles from '../styles/Cart.module.scss';

function Cart() {
    const [cartItems, setCartItems] = useState(() => getCart());

    const handleRemove = (carId) => {
        removeFromCart(carId);
        setCartItems(getCart());
    };

    return (
        <div className={styles.page}>
            <h1>Корзина</h1>
            {cartItems.length === 0 ? (
                <p className={styles.empty}>Корзина пуста</p>
            ) : (
                <div className={styles.list}>
                    {cartItems.map((car) => (
                        <div key={car.id} className={styles.item}>
                            <div className={styles.info}>
                                <h2>{car.brand} {car.model} ({car.year})</h2>
                                <p>Цена: {car.price.toLocaleString()} ₸</p>
                                <p>Топливо: {getFuelLabel(car.fuel)}</p>
                                <p>Коробка: {getTransmissionLabel(car.transmission)}</p>
                            </div>
                            <button
                                className={styles.remove}
                                onClick={() => handleRemove(car.id)}
                            >
                                Удалить
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Cart;