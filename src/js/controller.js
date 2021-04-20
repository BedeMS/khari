import navigationView from "./views/navigationView";
import selectionView from "./views/selectionView";
import categoryView from "./views/categoryView";
import productView from "./views/productView";
import * as model from "./model";
import productSizesView from "./views/productSizesView";
import productColorsView from "./views/productColorsView";
import addToCartView from "./views/addToCartView";
import cartView from "./views/cartView";
import checkoutView from "./views/checkoutView";

if (module.hot) {
  module.hot.accept();
}

//  Receive what product the user want to see
const controlSelection = function (product) {
  // update info to state
  model.updateState("selection", product);

  // Get data based on user selection
  model.productData();

  //Load DOM so that we can load content
  window.location.assign("http://localhost:1234/product.html");

  // Render Page
  // productView.render(productData);
};

// update state category
const controlCategory = function (cat) {
  // except for cart
  model.clearState();

  // update state on user choice
  model.updateState("category", cat);
};

const controlProductSizes = function (size, element) {
  // update State on user Size
  model.updateState("size", size);
  // render size choice
  productSizesView.renderSize(element);
};

const controlProductColors = function (color, element) {
  // update State on user Size
  model.updateState("color", color);
  // render size choice
  productColorsView.renderColor(element);
};

// Main Add To Cart Function
const controlAddToCart = function () {
  //get product quantity
  const productQuantity = addToCartView.getQuantity();

  model.updateState("quantity", +productQuantity);

  // Add user item to state cart
  const cart = model.addToCart();
  // update cart view
  addToCartView.render(cart);
};

// Load Cart Page
const controlCart = function () {
  let cartData = model.getCartInfo();
  if (!cartData) return;
  cartView.render(cartData);
};

const controlDeleteCart = function (itemId) {
  let cartData = model.deleteCartItem(itemId);
  if (!cartData) return;
  addToCartView.render(cartData[0]);
  cartView.render(cartData);
};

const controlUpdateQuantity = function (itemId, quantity) {
  let cartData;
  cartData = model.updateCartQuantity(itemId, quantity);
  if (!cartData) return;
  addToCartView.render(cartData[0]);
  cartView.render(cartData);
};

const controlCartIcon = function () {
  let cartData = model.getCartInfo();
  if (!cartData) return;

  addToCartView.render(cartData[0]);
};

// CheckOut
// Render Checkout
const controlRenderCheckout = function () {
  window.location.assign("http://localhost:1234/checkout.html");
};

// Checkout
// const controlCheckout = function () {};

const controlNavigation = function () {
  navigationView.toggleNav();
};

const init = function () {
  // Not Able to click on anything on Checkout
  // checkoutView.addHandlerCheckout(controlCheckout);
  cartView.addHandlerRender(controlCart);
  cartView.addHandlerDeleteItem(controlDeleteCart);
  cartView.addHandlerUpdateQuantity(controlUpdateQuantity);
  cartView.addHandlerRenderCheckoutForm(controlRenderCheckout);
  // cartView.addHandlerRender(controlDeleteCart);
  addToCartView.addHandlerRender(controlCartIcon);
  navigationView.addHandlerNav(controlNavigation);
  selectionView.addHandlerSelection(controlSelection);
  categoryView.addHandlerCategory(controlCategory);
  //Product Specific
  productSizesView.addHandlerProductSizes(controlProductSizes);
  productColorsView.addHandlerProductColors(controlProductColors);
  addToCartView.addHandlerAddToCart(controlAddToCart);
  // CheckOut View
};
init();
