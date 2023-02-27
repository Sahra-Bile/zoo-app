import { ISingelAnimal } from '../../models/ISingelAnimal';

export const dateChecker = (animal: ISingelAnimal) => {
  const animalStringDate = animal.lastFed;
  const animalObjectDate = new Date(animalStringDate);

  let staticDate = new Date(1000 * 60 * 60 * 3);

  const deadlineDate = new Date(
    animalObjectDate.getTime() + staticDate.getTime()
  );

  if (Date.now() > deadlineDate.getTime()) {
    animal.isFed = false;
    return animal;
  }
}


export const formattedDate = (result: string) => {
  let d = new Date();
  result +=
    d.getFullYear() +
    "/" +
    (d.getMonth() + 1) +
    "/" +
    d.getDate() +
    "/" +
    d.getHours() +
    ":" +
    d.getMinutes();
  return result;
}
