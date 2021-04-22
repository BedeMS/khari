import "regenerator-runtime/runtime";
import products from "./products/products";
import uniqid from "uniqid";
import { getObjects, sum } from "./helpers";

export const state = {};

// this function shows state based on session
export const persistState = function () {
  // Update State based on storage
  for (let i = 0; i < sessionStorage.length; i++) {
    let key = sessionStorage.key(i);
    state[key] = sessionStorage.getItem(key);
  }

  let { category, selection } = state;
  if (!category && selection) {
    products.forEach((el) => {
      el.selections.forEach((element) => {
        if (element.name === state.selection) {
          state.category = el.name;
        }
      });
    });
  }

  return state;
};

export const getCartInfo = function () {
  let cart;
  if (!sessionStorage.cart) return;
  cart = JSON.parse(sessionStorage.cart);
  if (cart.length < 1) return;
  // if(cart.cartTotal.totalCost) cart.cartTotal.totalCost = 0;
  const cartTotal = getCartTotal();
  // cart.push(cartTotal);
  return [cart, cartTotal];
};

const getCartTotal = function () {
  let cart;
  if (!sessionStorage.cart) return;
  cart = JSON.parse(sessionStorage.cart);
  if (cart.length < 1) return;
  // if(cart.cartTotal.totalCost) cart.cartTotal.totalCost = 0;
  const totalProductCost = sum(cart.map((el) => +el.total));
  const tax = Math.round(totalProductCost * 0.14);
  const shipping = Math.round(totalProductCost * 0.23);
  const totalQuantity = sum(cart.map((el) => +el.quantity));
  const totalCost = sum([totalProductCost, tax, shipping]).toFixed(2);
  const cartTotal = {
    totalQuantity,
    totalCost,
    tax,
    shipping,
  };
  updateState("cartTotal", JSON.stringify(cartTotal));
  return cartTotal;
};

export const addToCart = function () {
  if (!sessionStorage.cart) updateState("cart", JSON.stringify([]));

  let cart = JSON.parse(sessionStorage.cart);

  cart.push({
    id: uniqid(),
    category: state.product.category,
    product: state.product.name,
    size: state.size,
    color: state.color,
    quantity: +state.quantity,
    price: +state.product.price,
    total: +state.product.price * +state.quantity,
  });
  // console.log(cart);
  updateState("cart", JSON.stringify(cart));

  return cart;
};

export const productData = function () {
  // get current product based on category then selection
  let [currentProduct] = products.filter((el) => el.name === state.category);
  [currentProduct] = currentProduct.selections.filter(
    (el) => el.name === state.selection
  );
  state.product = currentProduct;
  const initSize = state.product.sizes[0].id;
  const initColor = state.product.sizes[0].colors[0].id;

  updateState("product", JSON.stringify(state.product));
  updateState("size", initSize);
  updateState("color", initColor);
};

export const updateState = function (item, val) {
  sessionStorage.setItem(item, val);
  persistState();
  // console.log(state);
};

// Loop through storage and delete everything except for our Cart
export const clearState = function () {
  for (let key in sessionStorage) {
    if (key !== "cart") {
      sessionStorage.removeItem(key);
    }
  }
};

export const deleteCartItem = function (cartItem) {
  let cart = JSON.parse(sessionStorage.cart);
  cart = cart.filter((el) => el.id !== cartItem);
  updateState("cart", JSON.stringify(cart));
  // if (cart.length < 1) return;
  const cartTotal = cart.length < 1 ? {} : getCartTotal();
  return [cart, cartTotal];
};

export const updateCartQuantity = function (id, newQuantity) {
  let cart = JSON.parse(sessionStorage.cart);
  cart = cart.map((el) => {
    if (el.id === id) {
      el.quantity = +newQuantity;
      el.total = el.price * el.quantity;
      return el;
    }
    return el;
  });
  updateState("cart", JSON.stringify(cart));
  const cartTotal = cart.length < 1 ? {} : getCartTotal();
  return [cart, cartTotal];
};

export const verifyCheckout = function (input) {};
