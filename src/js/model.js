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
    // Loop through Khari's Products
    for (let key in products) {
      //Loop through every category, key = category
      for (let property in products[key]) {
        // if property is in this category, then set it in the state
        if (property === selection) {
          updateState("category", key);
          return;
        } 
        // else {
        //   continue;
        // }
      }
    }
  }
  state.product = products[state.category][state.selection];

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
  // // get initial product size and color and set to state
  // console.log(state.product);
  const sizes = getObjects(state.product);
  const smallestSize = sizes[0];
  const firstColor = smallestSize.colors[0];

  updateState("size", smallestSize.id);
  updateState("color", firstColor.color);
};

export const updateState = function (item, val) {
  sessionStorage.setItem(item, val);
  persistState();
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
