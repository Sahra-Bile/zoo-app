
const LOCALSTORAGE_KEY = "animals";

//* jag hade kunnat använda mina interface som datatyp men jag har olika interface och jag vill använda dem och inte just en av dem så jag skapade möjlighet till att kunna använda olika datatyp i mina localStorage funktioner.

export const getAnimalFromLs = <AniamlData>(): AniamlData[] => {
  let animalFromLS = localStorage.getItem(LOCALSTORAGE_KEY) || "[]";
  return JSON.parse(animalFromLS);
};



// //** samma sak här (parameter) data: T */
export const saveAnimalToLs = <AniamlData>(data: AniamlData): void => {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
};

