import View from "./View";
import { isEmpty } from "../helpers";

class checkoutFormView extends View {
  _parentElement = document.querySelector(".main-checkout");
  // _checkoutBtn = document.querySelector(".checkout__btn");


  addHandlerCheckout() {
    window.addEventListener("load", function () {
      document.addEventListener("click", function (e) {
        console.log(e.target);

      });
    });

  }

  _createMarkUp() {
    return `

    `;
  }

}

export default new checkoutFormView();
