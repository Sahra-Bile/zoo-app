
const LOCALSTORAGE_KEY = "animals-list";

//** man måste tala om vad man ska få type parameter) T in <T>(): T[]  */
export const getAnimalFromLs = <T>(): T[] => {
  let animalFromLS = localStorage.getItem(LOCALSTORAGE_KEY) || "[]";
  return JSON.parse(animalFromLS);
};


//** samma sak här (parameter) data: T */
export const saveAnimalToLs = <T>(data: T): void => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};

