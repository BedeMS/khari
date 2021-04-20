import { addClass } from "../helpers";

class productColorsView {
  //   _sizeBtn = document.querySelectorAll(".size-btn");
  _colorBtn = document.querySelectorAll(".color");
  // _quantityInput = document.getElementById("quantity");
  // _addToCartBtn = document.getElementById("addToCart");

  renderColor(element) {
    addClass(element, "color-active");
  }

  addHandlerProductColors(handler) {
    this._colorBtn.forEach((el) => {
      el.addEventListener("click", (e) => {
        const color = e.target.id;
        handler(color, e.target);
      });
    });
  }
}

export default new productColorsView();
