class Cart {
  _cart = JSON.parse(localStorage.getItem("cart"))
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
  _cartTotal = null;
  _cartShipping = null;
  _cartTaxes = 0.14;

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

    // if our cart is empty
    // if (!this._cart.length) {
    //   product.totalPrice = product.quantity * product.price;
    //   this._cart.push(product);
    // } else {
    // if our cart is not empty, we want to make sure we're not duplicating data.
    // let cartItem = this._findCorrectProduct(product);

    // If there's a matching product

    //   if (cartItem.length) {
    //     product.quantity = cartItem[0].quantity + product.quantity;
    //   }
    //   product.totalPrice = product.quantity * product.price;

    //   this._cart = this._cart.map((item) =>
    //     item.id === product.id &&
    //     item.size === product.size &&
    //     item.color === product.color
    //       ? product
    //       : item
    //   );
    // }

    localStorage.setItem("cart", JSON.stringify(this._cart));
    return this._cart;
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

  // 4. Calculate Total

  // 5. Calculate Shipping Amount

  // 6. Calculate Taxes
}

export default new Cart();
