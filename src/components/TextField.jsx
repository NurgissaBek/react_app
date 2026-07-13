import styles from '../styles/TextField.module.scss';
const TextField = ({
    name,
    label,
    value,
    onChange,
    error,
    type="text",
    placeholder,
    onBlur,
})=>{
    return(
        <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        className={`${styles.input} ${error ? styles.inputError : ''}`}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
    );
};

export default TextField;