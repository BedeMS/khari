import View from "./View";

class AddToCartView extends View {
  _addToCartBtn = document.getElementById("addToCart");
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
    // console.log(this._quantityInput.value);
    return this._quantityInput.value;
  }

  addHandlerAddToCart(handler) {
    if (!this._addToCartBtn) return;
    this._addToCartBtn.addEventListener("click", handler);
  }
}

export default new AddToCartView();
