import styles from '../styles/FormField.module.scss';

const FormField = ({ name, label, error, children }) => {
  const errorId = `${name}-error`;

  const controlProps = {
    id: name,
    name,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? errorId : undefined,
  };

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>

      {children(controlProps)}

      {error && (
        <span className={styles.error} id={errorId} role="alert">
          {error}
        </span>
      )}
    </div>
  );
};

export default FormField;