import navigationView from "./views/navigationView";
import selectionView from "./views/selectionView";
import categoryView from "./views/categoryView";
import productView from "./views/productView";
import * as model from "./model";
import products from "./products/products";
import productSizesView from "./views/productSizesView";
import productColorsView from "./views/productColorsView";
import addToCartView from "./views/addToCartView";
import cartView from "./views/cartView";
import checkoutView from "./views/checkoutView";

if (module.hot) {
  module.hot.accept();
}

// update state category
const controlCategory = function (category) {
  // Clear storage expect for Cart
  model.clearState();

  // Update session storage on Users choice
  model.updateState("category", category);
};

//  Receive what product the user want to see
const controlSelection = function (product) {
  // update info to state
  model.updateState("selection", product);

  // Set data based on user selection
  model.productData();

  //Load DOM so that we can load content
  window.location.assign("http://localhost:1234/product.html");
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

const controlNavigation = function () {
  navigationView.toggleNav();
};

const init = function () {
  // Cart Specific View
  cartView.addHandlerRender(controlCart);
  cartView.addHandlerDeleteItem(controlDeleteCart);
  cartView.addHandlerUpdateQuantity(controlUpdateQuantity);
  cartView.addHandlerRenderCheckoutForm(controlRenderCheckout);

  //Cart + Nav View
  addToCartView.addHandlerRender(controlCartIcon);
  navigationView.addHandlerNav(controlNavigation);
  // navigationView.addHandlerCategory(controlGender);

  //Category + Selection of Product Views
  categoryView.addHandlerCategory(controlCategory);
  selectionView.addHandlerSelection(controlSelection);

  //Product Specific view
  productSizesView.addHandlerProductSizes(controlProductSizes);
  productColorsView.addHandlerProductColors(controlProductColors);
  addToCartView.addHandlerAddToCart(controlAddToCart);
};
init();
