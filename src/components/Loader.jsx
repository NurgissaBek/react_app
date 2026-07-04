import styles from '../styles/Loader.module.scss';

function Loader() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.spinner} />
      <p className={styles.text}>Загрузка...</p>
    </div>
  );
}

export default Loader;
