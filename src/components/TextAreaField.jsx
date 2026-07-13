import styles from '../styles/TextAreaField.module.scss';

const TextAreaField = ({
  name,
  label,
  value,
  onChange,
  error,
  rows = 4,
  placeholder,
  onBlur,
}) => {
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <textarea
        className={`${styles.textarea} ${error ? styles.textareaError : ''}`}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        rows={rows}
        placeholder={placeholder}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default TextAreaField;