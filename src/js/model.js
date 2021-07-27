import products from "./products/finalProducts";

let state = {};

export const updateState = (name, item) => {
  // get current state
  state = JSON.parse(getLocalStorage("state"));
  // update state object
  state = { ...state, [name]: item };
  
  return state;
};

export const setLocalStorage = (name, data = "") =>
  localStorage.setItem(name, JSON.stringify(data));

const getLocalStorage = function (name) {
  return localStorage.getItem(name);
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


const init = function(){
  setLocalStorage("state");
}

init();