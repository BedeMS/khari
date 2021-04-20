// Add Class
export const addClass = function (element, className) {
  const target = element.parentElement.children;
  console.log(target);
  for (let i = 0; i < target.length; i++) {
    target[i].classList.remove(className);
  }
  element.classList.add(className);
};

// Loop Object and return desired values in an array
export const valueObj = function (obj, item) {
  // look through obj and push quantity to array
  let arr = getObjects(obj);
  // extract desired val
  let newArr = arr.map((el) => el[item]);
  // return the sum
  // console.log(sum(newArr));
  return sum(newArr);
};

//Loop Through Object and Extract Objects
export const getObjects = function (obj) {
  let arr = [];
  for (let key in obj) {
    if (obj[key] === Object(obj[key])) {
      arr.push(obj[key]);
    } else {
      continue;
    }
  }
  return arr;
};

// Returns the Sum of an Array
export const sum = function (arr) {
  const total = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
  return total;
};

// Check for Empty object
export function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
