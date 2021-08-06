import { reducer } from "./utils";

class Cart {
  _cart = JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  cartSubTotal = null;
  cartShipping = null;
  tax = 0.14;
  cartTaxes = null;
  cartTotal = null;
  cartQuantity = null;

  // 1. Add Product to Cart
  // Product should be an object; = { size: "xs", color: "red", price: 20, etc... }
  addProduct(product) {
    // find out if there's a matching product already in the cart;
    let cartItem = this._findCorrectProduct(product);

    // if there is, just add to that product;
    if (cartItem.length) {
      cartItem[0].quantity = product.quantity + cartItem[0].quantity;

      cartItem[0].totalPrice = cartItem[0].quantity * cartItem[0].price;

      this._cart = this._cart.map((item) =>
        item.id === product.id &&
        item.size === product.size &&
        item.color === product.color
          ? cartItem[0]
          : item
      );
    } else {
      product.totalPrice = product.quantity * product.price;
      this._cart.push(product);
    }

    let allPrices = this.getCalculations();
    localStorage.setItem("cart", JSON.stringify(this._cart));

    return allPrices;
  }

  // if cart has the product already or not;
  _findCorrectProduct(product) {
    let currentProduct = this._cart.filter(
      (item) =>
        item.id === product.id &&
        item.size === product.size &&
        item.color === product.color
    );

    return currentProduct;
  }

  // 2. Remove Product from Cart

  // 3. Update Cart from Quantity

  // 4. total Cart quantity Total quantity
  _calculateCartQuantity() {
    let allQuantity = this._cart.map((item) => item.quantity);

    this.cartQuantity = allQuantity.length ? allQuantity.reduce(reducer) : null;

    return this.cartQuantity;
  }

  // 4. Calculate Total
  _calculateSubTotal() {
    let allPrices = this._cart.map((item) => item.totalPrice);

    this.cartSubTotal = allPrices.length ? allPrices.reduce(reducer) : null;

    return this.cartSubTotal;
  }

  // 5. Calculate Taxes
  _calculateTax() {
    let subTotal = this.cartSubTotal
      ? this.cartSubTotal
      : this._calculateSubTotal();

    this.cartTaxes = +(subTotal * this.tax).toFixed(2);

    return this.cartTaxes;
  }

  // 6. Calculate Shipping Amount

  // 7. Calculate Final price
  _calculateFinalPrice() {
    this.cartTotal = this.cartSubTotal + this.cartTaxes;

    return this.cartTotal;
  }

  getCalculations() {
    this._calculateSubTotal();
    this._calculateTax();
    this._calculateFinalPrice();
    this._calculateCartQuantity();

    return {
      cart: this._cart,
      cartSubTotal: this.cartSubTotal,
      cartTaxes: this.cartTaxes,
      cartTotal: this.cartTotal,
      cartQuantity: this.cartQuantity,
    };
  }
}

export default new Cart();
