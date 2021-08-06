import View from "../View";

class CartIconView extends View {
  _parentElement = document.querySelector(".header__user-cart");
  _createMarkUp() {
    
    return `
        ${
          this._data.cartQuantity
            ? `<p class="cart__count">${this._data.cartQuantity}</p>`
            : ""
        }
        <i class="fas fa-shopping-cart"></i>
        `;
  }
}

export default new CartIconView();
