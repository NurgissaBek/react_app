import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '../components/TextField';
import SelectField from '../components/SelectField';
import TextAreaField from '../components/TextAreaField';
import { FUEL_TYPES, TRANSMISSION_TYPES } from '../constants/car.constants';
import { sellCarSchema, sellFormDefaultValues } from '../schemas/sellCarSchema';
import styles from '../styles/Sell.module.scss';

const fuelOptions = Object.values(FUEL_TYPES);
const transmissionOptions = Object.values(TRANSMISSION_TYPES);

const fakeSubmitRequest = () => new Promise((resolve) => setTimeout(resolve, 800));

const Sell = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm({
    resolver: zodResolver(sellCarSchema),
    defaultValues: sellFormDefaultValues,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    shouldFocusError: true,
  });

  const onSubmit = async (data) => {
    await fakeSubmitRequest();
    console.log('Объявление:', data);
  };

  if (isSubmitSuccessful) {
    return (
      <div className={styles.page}>
        <h1>Продать авто</h1>
        <p className={styles.success} role="status">
          Объявление отправлено на модерацию
        </p>
        <button className={styles.submit} type="button" onClick={() => reset()}>
          Разместить ещё одно
        </button>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <h1>Продать авто</h1>

      <form className={styles.form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <fieldset className={styles.group}>
          <legend className={styles.legend}>Характеристики</legend>

          <div className={styles.row}>
            <TextField
              label="Марка"
              placeholder="Toyota"
              registration={register('brand')}
              error={errors.brand?.message}
            />
            <TextField
              label="Модель"
              placeholder="Camry"
              registration={register('model')}
              error={errors.model?.message}
            />
          </div>

          <div className={styles.row}>
            <TextField
              label="Год выпуска"
              type="number"
              placeholder="2019"
              registration={register('year')}
              error={errors.year?.message}
            />
            <TextField
              label="Цена, ₸"
              type="number"
              placeholder="8500000"
              registration={register('price')}
              error={errors.price?.message}
            />
            <TextField
              label="Пробег, км"
              type="number"
              placeholder="62000"
              registration={register('mileage')}
              error={errors.mileage?.message}
            />
          </div>

          <div className={styles.row}>
            <SelectField
              label="Тип топлива"
              options={fuelOptions}
              registration={register('fuel')}
              error={errors.fuel?.message}
            />
            <SelectField
              label="Коробка передач"
              options={transmissionOptions}
              registration={register('transmission')}
              error={errors.transmission?.message}
            />
          </div>
        </fieldset>

        <fieldset className={styles.group}>
          <legend className={styles.legend}>Контакты</legend>

          <div className={styles.row}>
            <TextField
              label="Телефон"
              type="tel"
              placeholder="+77001234567"
              registration={register('phone')}
              error={errors.phone?.message}
            />
            <TextField
              label="Город"
              placeholder="Алматы"
              registration={register('city')}
              error={errors.city?.message}
            />
          </div>
        </fieldset>

        <fieldset className={styles.group}>
          <legend className={styles.legend}>Описание</legend>

          <TextAreaField
            label="Описание автомобиля"
            placeholder="Один владелец, полная комплектация"
            registration={register('description')}
            error={errors.description?.message}
          />
        </fieldset>

        <button className={styles.submit} type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Отправка…' : 'Разместить объявление'}
        </button>
      </form>
    </div>
  );
};

export default Sell;