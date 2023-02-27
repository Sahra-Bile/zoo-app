
const LOCALSTORAGE_KEY = "animals-list";

export const getAnimalFromLs = <T>(): T[] => {
  let animalFromLS = localStorage.getItem(LOCALSTORAGE_KEY) || "[]";
  return JSON.parse(animalFromLS);
};

export const saveAnimalToLs = <T>(data: T): void => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};
