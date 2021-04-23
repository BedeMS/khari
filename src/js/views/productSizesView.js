import { addClass } from "../helpers";
import View from "./View";

class productSizesView extends View {
  _parentElement = document.querySelector(".sizes");
  _sizeBtn = document.querySelectorAll(".size-btn");

  renderSize(element) {
    addClass(element, "size-active");
  }
  

  addHandlerProductSizes(handler) {
    // console.log(this._sizeBtn);
    this._sizeBtn.forEach((el) => {
      el.addEventListener("click", (e) => {
        const size = e.target.id;
        handler(size, e.target);
      });
    });
  }
}

export default new productSizesView();
