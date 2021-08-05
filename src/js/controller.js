import navigation from "./views/navigation";
import headerView from "./views/header";
import * as model from "./model";
import categoriesView from "./views/categoriesView";
import selectionsView from "./views/selectionsView";
import productView from "./views/productView/ProductView";
import productHeaderView from "./views/productView/ProductHeaderView";
import productSizesView from "./views/productView/ProductSizesView";
import productColorsView from "./views/productView/ProductColorsView";
import productImageView from "./views/productView/ProductImageView";
import addToCartView from "./views/cartView/addToCartView";
import cartIconView from "./views/cartView/cartIconView";

if (module.hot) {
  module.hot.accept();
}

// Gets the correct Categories based on Gender
const controlShowCategories = function (gender) {
  // when man/woman page is opened, load category data
  const categories = model.getCategories(gender);

  // Update state, to include current category name
  let state = model.updateState("gender", gender);

  // update localStorage
  model.setLocalStorage("state", state);

  // render categories
  categoriesView.render(categories);
};

// Gets Category Name from Event man/woman Page and updates state
const controlCategory = function (categoryName) {
  // Update state, to include current category name
  let state = model.updateState("category", categoryName);
  // update localStorage
  model.setLocalStorage("state", state);
};

// Renders Selections based on the current Category in state
const controlShowSelections = function () {
  // Render Correct Header from state
  let { gender, category } = model.getLocalStorage("state");
  headerView.render({ gender, category });

  // Get current selections
  let selections = model.getSelections();
  // Render Selection on page load;
  selectionsView.render(selections);
};

// Get Product Name the user picks on the selection page
const controlSelections = function (productName) {
  // update state for current Products
  let state = model.updateState("product", productName);
  // persist data into LocalStorage
  model.setLocalStorage("state", state);
};

// Render Products based on current state;
const controlShowProducts = function () {
  let product = model.getProducts(true);
  // Render Product Based on Correct Details;
  productView.render(product);
  // Set Header Based on State;
  productHeaderView.render(model.getLocalStorage("state"));
  // b/c the elements get rendered in js, we have to set some elements here.
  productImageView._setParentElement();
  productColorsView._setParentElement();

  // set the correct image based on first color
  controlColors(model.getLocalStorage("state").color);
};

// Rendering Correct Product colors and images based on size;
const controlSizes = function (newSize) {
  const state = model.updateState("size", newSize);
  model.setLocalStorage("state", state);

  // update image & colors based on size choice
  // Get Colors based on Size.
  let sizeColors = model.getColorsFromSize(newSize);

  productColorsView.render(sizeColors);

  // Update first color in size in state;
  controlColors(sizeColors[0]);
};

const controlColors = function (newColor) {
  // update our state
  const state = model.updateState("color", newColor);
  model.setLocalStorage("state", state);

  // Get the correct image w/ product name and category
  const colorImage = model.getImagebyColor(newColor);
  // Render new Image based on color
  productImageView.render(colorImage);
};

//----------------------------------------------------------------
// Section Cart
const controlAddToCart = function (quantity) {
  console.log(quantity);
  // send quantity to model;
  let cartItems = model.addProductToCart(quantity);

  console.log(cartItems);

  cartIconView.render(cartItems);
};

const init = function () {
  categoriesView.addHandler(controlCategory);
  selectionsView.addProductHandler(controlSelections);
  productSizesView.addProductSizeHandler(controlSizes);
  productColorsView.addProductColorHandler(controlColors);
  addToCartView.addToCartHandler(controlAddToCart);

  // render cart quantity 
  cartIconView.render(model.cartItems());

  // when man page is clicked, load categories for man
  if (location.pathname === "/man.html") {
    controlShowCategories("man");
  } else if (location.pathname === "/woman.html") {
    controlShowCategories("woman");
  }

  if (location.pathname === "/selection.html") {
    // render category selections
    controlShowSelections();
  }

  if (location.pathname === "/product.html") {
    controlShowProducts();
  }
};

init();
