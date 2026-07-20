import FormField from './FormField';
import styles from '../styles/SelectField.module.scss';

const SelectField = ({
    label,
    registration,
    options,
    error }) => {
  return (
    <FormField name={registration.name} label={label} error={error}>
      {(controlProps) => (
        <select
          {...controlProps}
          {...registration}
          className={`${styles.control} ${error ? styles.controlError : ''}`}
        >
          <option value="">Выберите…</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      )}
    </FormField>
  );
};

export default SelectField;