import FormField from './FormField';
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
    return (
    <FormField name={name} label={label} error={error}>
      {(controlProps) => (
        <input
          {...controlProps}
          className={`${styles.control} ${error ? styles.controlError : ''}`}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      )}
    </FormField>
  );
};

export default TextField;