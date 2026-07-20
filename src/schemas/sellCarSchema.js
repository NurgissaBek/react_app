import {z} from 'zod';
import {FUEL_TYPES, TRANSMISSION_TYPES } from '../constants/car.constants.js';

const CURRENT_YEAR = new Date().getFullYear();

const FUEL_VALUES = Object.values(FUEL_TYPES).map((type)=> type.value);
const TRANSMISSION_VALUES = Object.values(TRANSMISSION_TYPES).map((type) => type.value);

const countDigits = (value) => (value.match(/\d/g) ?? []).length;

const toNumber = (value) => {
  if (typeof value !== 'string') return value;
  const trimmed = value.trim();
  return trimmed === '' ? undefined : Number(trimmed);
};

export const sellCarSchema = z.object({
  brand: z
    .string()
    .trim()
    .min(1, 'Укажите марку')
    .min(2, 'Марка должна быть не короче 2 символов')
    .max(50, 'Марка не длиннее 50 символов'),

  model: z
    .string()
    .trim()
    .min(1, 'Укажите модель')
    .max(50, 'Модель не длиннее 50 символов'),

  year: z.preprocess(
    toNumber,
    z
      .number('Укажите год выпуска')
      .int('Год должен быть целым числом')
      .min(1990, 'Год не может быть раньше 1990')
      .max(CURRENT_YEAR, `Год не может быть позже ${CURRENT_YEAR}`),
  ),

  price: z.preprocess(
    toNumber,
    z
      .number('Укажите цену')
      .int('Цена должна быть целым числом')
      .min(100000, 'Минимальная цена — 100 000 ₸'),
  ),

  mileage: z.preprocess(
    toNumber,
    z
      .number('Укажите пробег')
      .int('Пробег должен быть целым числом')
      .min(0, 'Пробег не может быть отрицательным'),
  ),

  fuel: z.enum(FUEL_VALUES, 'Выберите тип топлива'),

  transmission: z.enum(TRANSMISSION_VALUES, 'Выберите коробку передач'),

  phone: z
    .string()
    .trim()
    .min(1, 'Укажите телефон')
    .regex(/^\+?[\d\s()-]+$/, 'Телефон может содержать только цифры, +, пробелы, скобки и дефисы')
    .refine((value) => countDigits(value) >= 10, 'Телефон должен содержать минимум 10 цифр')
    .refine((value) => countDigits(value) <= 15, 'Телефон должен содержать максимум 15 цифр'),

  city: z
    .string()
    .trim()
    .min(1, 'Укажите город')
    .max(100, 'Название города не длиннее 100 символов'),

  description: z
    .string()
    .trim()
    .max(1000, 'Описание не длиннее 1000 символов'),
});

export const sellFormDefaultValues = {
  brand: '',
  model: '',
  year: '',
  price: '',
  mileage: '',
  fuel: '',
  transmission: '',
  phone: '',
  city: '',
  description: '',
};