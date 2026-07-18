import FormField from './FormField';
import styles from '../styles/SelectField.module.scss';

const SelectField = ({
    name, 
    label,
    value,
    onChange,
    options,
    error }) => {
  return (
    <FormField name={name} label={label} error={error}>
      {(controlProps) => (
        <select
          {...controlProps}
          className={`${styles.control} ${error ? styles.controlError : ''}`}
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
      )}
    </FormField>
  );
};

export default SelectField;