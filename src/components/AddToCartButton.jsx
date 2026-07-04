import { useState } from 'react';
import { isInCart, addToCart, removeFromCart } from '../utils/cart_utils';
import styles from '../styles/AddToCartButton.module.scss';

function AddToCartButton({ car }) {
  const [inCart, setInCart] = useState(() => isInCart(car.id));

  const handleClick = (e) => {
    e.stopPropagation();
    if (inCart) {
      removeFromCart(car.id);
      setInCart(false);
    } else {
      addToCart(car);
      setInCart(true);
    }
  };

  if (inCart) {
    return <span className={styles.badge}> Уже в корзине</span>;
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      В корзину
    </button>
  );
}

export default AddToCartButton;
