import products from "./products/finalProducts";
import { checkObjEmpty } from "./utils";
import cart from "./Cart";

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

export function getLocalStorage(name) {
  return JSON.parse(localStorage.getItem(name));
}

export const getImagebyColor = (color) => {
  const product = getProducts(false);
  const productImage = {
    image: product.images[color],
    name: product.name,
    category: product.category,
  };
  return productImage;
};

// arg = if arg is set to true, we want to set size and color in our
// state to the first of their kind in the state. If it's not, we just
// want the product details.
export const getProducts = (arg) => {
  state = getLocalStorage("state");

  // Get the current selection based on state
  let selections = getSelections();

  // Get Current Product
  let [currentProduct] = selections.filter(
    (item) => item.name === state.product
  );

  // only send sizes available with quantity;
  currentProduct.sizes = checkForEmptyObj(currentProduct.sizes);

  if (arg) {
    // Set size in state and
    setStateSize(currentProduct);
    // Set Color based on color
    setStateColor(currentProduct.sizes);
    // Set Price in state
    setLocalStorage("state", updateState("price", currentProduct.price));
    // Set Item id
    setLocalStorage("state", updateState("id", currentProduct.id));
  }

  return currentProduct;
};

// check and  only send  the  sizes with item  already in them.
const checkForEmptyObj = (obj) => {
  let newObj = {};
  for (let property in obj) {
    if (!checkObjEmpty(obj[property])) {
      newObj[property] = obj[property];
    }
  }

  return newObj;
};

const setStateSize = (obj) => {
  let size = Object.keys(obj.sizes)[0];
  // set the lowest size to state
  setLocalStorage("state", updateState("size", size));

  return size;
};

const setStateColor = (obj) => {
  let color = Object.keys(Object.values(obj)[0])[0];
  // set the first color in the above size in local storage
  setLocalStorage("state", updateState("color", color));

  return color;
};

// This gets the colors based on the size;
export const getColorsFromSize = (size) => {
  let product = getProducts(false);

  let sizeColors = [];

  for (let property in product.sizes) {
    if (property === size) {
      sizeColors.push(product.sizes[property]);
    }
  }

  let colors = [];

  for (let property in sizeColors[0]) {
    colors.push(property);
  }

  return colors;
};

// Get selections based on state
export const getSelections = () => {
  state = getLocalStorage("state");

  // get product based on current gender
  let currentProducts = state.gender === "man" ? products[0] : products[1];

  // Loop through products and find the right category
  let selections;
  for (let property in currentProducts) {
    if (currentProducts[property][0].category === state.category) {
      selections = currentProducts[property];
    }
  }

  // selections = selections.map(item => {
  //   return {name: item.name, image: item.categoryImage}
  // });

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

// ------------------------------------------------------------------------
// Cart Related

// console.log(cart._cart);
export const addProductToCart = function (quantity) {
  let product = getLocalStorage("state");
  product.quantity = quantity;

  // this returns all the cart items; array;
  let cartItems = cart.addProduct(product);

  let cartSubTotal = cart.cartTotal;

  let cartTax = +(cartSubTotal * cart.cartTaxes).toFixed(2);

  let cartTotal = cartSubTotal + cartTax;

  return { cartItems, cartSubTotal, cartTax, cartTotal };
};
