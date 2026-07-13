import { useState } from 'react';
import TextField from '../components/TextField';
import SelectField from '../components/SelectField';
import TextAreaField from '../components/TextAreaField';
import { FUEL_TYPES, TRANSMISSION_TYPES } from '../constants/car.constants';
import sellFormValidatorConfig from '../constants/sellFormValidatorConfig';
import { validateForm } from '../utils/validators/validateForm';
import {
  hasErrors,
  createChangeHandler,
  createClearFieldError,
  createInitialValues,
} from '../utils/formUtils';
import styles from '../styles/Sell.module.scss';

const FIELD_NAMES = [
  'brand',
  'model',
  'year',
  'price',
  'mileage',
  'fuel',
  'transmission',
  'phone',
  'city',
  'description',
];

const fuelOptions = Object.values(FUEL_TYPES);
const transmissionOptions = Object.values(TRANSMISSION_TYPES);

const Sell = () => {
  const [values, setValues] = useState(() => createInitialValues(FIELD_NAMES));
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateValues = createChangeHandler(setValues);
  const clearFieldError = createClearFieldError(setErrors);

  const handleChange = (event) => {
    updateValues(event);
    clearFieldError(event.target.name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm(values, sellFormValidatorConfig);
    setErrors(validationErrors);

    if (hasErrors(validationErrors)) return;

    console.log('Объявление:', values);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className={styles.page}>
        <h1>Продать авто</h1>
        <p className={styles.success}>Объявление отправлено на модерацию</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1>Продать авто</h1>

      <form className={styles.form} onSubmit={handleSubmit} noValidate>
        <fieldset className={styles.group}>
          <legend className={styles.legend}>Характеристики</legend>

          <div className={styles.row}>
            <TextField
              name="brand"
              label="Марка"
              placeholder="Toyota"
              value={values.brand}
              onChange={handleChange}
              error={errors.brand ?? ''}
            />
            <TextField
              name="model"
              label="Модель"
              placeholder="Camry"
              value={values.model}
              onChange={handleChange}
              error={errors.model ?? ''}
            />
          </div>

          <div className={styles.row}>
            <TextField
              name="year"
              label="Год выпуска"
              type="number"
              placeholder="2019"
              value={values.year}
              onChange={handleChange}
              error={errors.year ?? ''}
            />
            <TextField
              name="price"
              label="Цена, ₸"
              type="number"
              placeholder="8500000"
              value={values.price}
              onChange={handleChange}
              error={errors.price ?? ''}
            />
            <TextField
              name="mileage"
              label="Пробег, км"
              type="number"
              placeholder="62000"
              value={values.mileage}
              onChange={handleChange}
              error={errors.mileage ?? ''}
            />
          </div>

          <div className={styles.row}>
            <SelectField
              name="fuel"
              label="Тип топлива"
              value={values.fuel}
              onChange={handleChange}
              options={fuelOptions}
              error={errors.fuel ?? ''}
            />
            <SelectField
              name="transmission"
              label="Коробка передач"
              value={values.transmission}
              onChange={handleChange}
              options={transmissionOptions}
              error={errors.transmission ?? ''}
            />
          </div>
        </fieldset>

        <fieldset className={styles.group}>
          <legend className={styles.legend}>Контакты</legend>

          <div className={styles.row}>
            <TextField
              name="phone"
              label="Телефон"
              type="tel"
              placeholder="+77001234567"
              value={values.phone}
              onChange={handleChange}
              error={errors.phone ?? ''}
            />
            <TextField
              name="city"
              label="Город"
              placeholder="Алматы"
              value={values.city}
              onChange={handleChange}
              error={errors.city ?? ''}
            />
          </div>
        </fieldset>

        <fieldset className={styles.group}>
          <legend className={styles.legend}>Описание</legend>

          <TextAreaField
            name="description"
            label="Описание автомобиля"
            placeholder="Один владелец, полная комплектация"
            value={values.description}
            onChange={handleChange}
            error={errors.description ?? ''}
          />
        </fieldset>

        <button className={styles.submit} type="submit">
          Разместить объявление
        </button>
      </form>
    </div>
  );
};

export default Sell;