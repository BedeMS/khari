export const capitalizeFirstLetter = (string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const checkObjEmpty = (obj) =>
  obj && Object.keys(obj).length === 0 && obj.constructor === Object;

export const reducer = (accumulator, currentValue) => accumulator + currentValue;