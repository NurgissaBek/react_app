import { carsMock } from '../data/carsData';

const delay_ms = 800;

const delay = async (ms) => {
  return new Promise((resolve) =>
    setTimeout(resolve, ms));
};

export const getCars = async () => {
  await delay(delay_ms);
  return carsMock;
};

export const getCarById = async (id) => {
  await delay(delay_ms);
  const car = carsMock.find((c) => c.id === Number(id));
  if (!car) throw new Error(`Машина с id=${id} не найдена`);
  return car;
};