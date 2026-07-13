import styles from '../styles/SelectField.module.scss';

const SelectField = ({ name, label, value, onChange, options, error }) => {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <select
        className={`${styles.select} ${error ? styles.selectError : ''}`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      >
        <option value="">Выберите…</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default SelectField;