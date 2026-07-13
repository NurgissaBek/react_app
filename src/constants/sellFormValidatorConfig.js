const CURRENT_YEAR = new Date().getFullYear();

const sellFormValidatorConfig = {
  brand: {
    isRequired: { message: 'Укажите марку' },
    minLength: { value: 2, message: 'Марка должна быть не короче 2 символов' },
  },
  model: {
    isRequired: { message: 'Укажите модель' },
  },
  year: {
    isRequired: { message: 'Укажите год выпуска' },
    isNumber: { message: 'Год должен быть числом' },
    minValue: { value: 1990, message: 'Год не может быть раньше 1990' },
    maxValue: { value: CURRENT_YEAR, message: `Год не может быть позже ${CURRENT_YEAR}` },
  },
  price: {
    isRequired: { message: 'Укажите цену' },
    isNumber: { message: 'Цена должна быть числом' },
    minValue: { value: 100000, message: 'Минимальная цена — 100 000 ₸' },
  },
  mileage: {
    isRequired: { message: 'Укажите пробег' },
    isNumber: { message: 'Пробег должен быть числом' },
    minValue: { value: 0, message: 'Пробег не может быть отрицательным' },
  },
  fuel: {
    isRequired: { message: 'Выберите тип топлива' },
  },
  transmission: {
    isRequired: { message: 'Выберите коробку передач' },
  },
  phone: {
    isRequired: { message: 'Укажите телефон' },
    minLength: { value: 10, message: 'Телефон должен содержать минимум 10 цифр' },
  },
  city: {
    isRequired: { message: 'Укажите город' },
  },
  description: {
    maxLength: { value: 1000, message: 'Описание не длиннее 1000 символов' },
  },
};

export default sellFormValidatorConfig;