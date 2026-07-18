import FormField from './FormField';
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
    <FormField name={name} label={label} error={error}>
      {(controlProps) => (
        <textarea
          {...controlProps}
          className={`${styles.control} ${error ? styles.controlError : ''}`}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          rows={rows}
          placeholder={placeholder}
        />
      )}
    </FormField>
  );
};

export default TextAreaField;