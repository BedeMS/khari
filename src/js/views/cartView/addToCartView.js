class AddToCartView {
  //   _addToCartBtn = document.querySelector(".add-to-cart");
  //   _productQuantity = document.querySelector(".quantity");

  addToCartHandler(handler) {
    // when add to cart btn is clicked...
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("add-to-cart")) {
        this._productQuantity = document.querySelector(".quantity");
        // get the quantity
        let quantity = +this._productQuantity.value;

        // send with handler
          handler(quantity);

        // reset value
          this._productQuantity.value = 1;
      }

    });
  }
}

export default new AddToCartView();
