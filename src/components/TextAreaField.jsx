import FormField from './FormField';
import styles from '../styles/TextAreaField.module.scss';

const TextAreaField = ({
  label,
  registration,
  error,
  rows = 4,
  placeholder,
}) => {
  return (
    <FormField name={registration.name} label={label} error={error}>
      {(controlProps) => (
        <textarea
          {...controlProps}
          {...registration}
          className={`${styles.control} ${error ? styles.controlError : ''}`}
          rows={rows}
          placeholder={placeholder}
        />
      )}
    </FormField>
  );
};

export default TextAreaField;