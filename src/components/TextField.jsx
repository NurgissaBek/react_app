import FormField from './FormField';
import styles from '../styles/TextField.module.scss';
const TextField = ({
    label,
    error,
    registration,
    type="text",
    placeholder,
})=>{
    return (
    <FormField name={registration.name} label={label} error={error}>
      {(controlProps) => (
        <input
          {...controlProps}
          {...registration}
          className={`${styles.control} ${error ? styles.controlError : ''}`}
          type={type}
          placeholder={placeholder}
        />
      )}
    </FormField>
  );
};

export default TextField;