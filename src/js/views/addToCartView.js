import View from "./View";

class AddToCartView extends View {
  // _addToCartBtn = document.getElementById("addToCart");
  _quantityInput = document.getElementById("quantity");
  _parentElement = document.querySelector(".header__cart");

  _createMarkUp() {
    if (this._data.length > 0) {
      return `<p class="cart__amount-num">${this._data.length}</p>
      <i class="fas fa-shopping-bag fas-grey"></i>
      `;
    } else {
      return `<i class="fas fa-shopping-bag fas-dark"></i>`;
    }
  }

  _checkLocation() {
    const url = location.href.split("/");
    if (url.includes("index.html")) {
      return true;
    }
    return false;
  }

  getQuantity() {
    return this._quantityInput.value;
  }

  addHandlerAddToCart(handler) {
    document.addEventListener("click", (e) => {
      if (e.target.closest("#addToCart")) {
        handler();
      }
    });
  }
}

export default new AddToCartView();
