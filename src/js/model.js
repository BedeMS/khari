import products from "./products/finalProducts";

let state = {};

export const updateState = (name, item) => {
  // get current state
  state = getLocalStorage("state");
  // update state object
  state = { ...state, [name]: item };

  return state;
};

export const setLocalStorage = (name, data = "") =>
  localStorage.setItem(name, JSON.stringify(data));

function getLocalStorage (name) {
  return JSON.parse(localStorage.getItem(name));
};

// Get selections based on state
export const getSelections = () => {
  state = getLocalStorage("state");

  // get product based on current gender
  let currentProducts = state.gender === "man" ? products[0] : products[1];

  // Loop through products and find the right category
  let selections;
  for(let property in currentProducts) {
    if(currentProducts[property][0].category === state.category){
      selections = currentProducts[property]
    }
  }

  selections = selections.map(item => {
    return {name: item.name, image: item.categoryImage}
  });

  return selections;
};

// Gets categories based on page, female or male.
export const getCategories = (gender) => {
  let categories = [];

  // If Male / Female: send back title and first image of each category  {title, image}
  if (gender === "man") {
    let man = products[0];
    for (let property in man) {
      let category = {
        title: man[property][0].category,
        image: man[property][0].categoryImage,
      };
      categories.push(category);
    }
  } else {
    let woman = products[1];
    for (let property in woman) {
      let category = {
        title: woman[property][0].category,
        image: woman[property][0].categoryImage,
      };
      categories.push(category);
    }
  }

  return categories;
};

// const init = function () {
// };

// init();
