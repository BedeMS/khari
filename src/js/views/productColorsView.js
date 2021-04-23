import { addClass } from "../helpers";
import View from "./View";

class productColorsView extends View {
  _parentElement = document.querySelector(".colors");
  _colorBtn = document.querySelectorAll(".color");

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

  // _createMarkUp() {
  //   const product = JSON.parse(this._data.product);
  //   return `
    
  //   `;
  // }
}

export default new productColorsView();
