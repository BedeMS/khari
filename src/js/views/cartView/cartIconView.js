import View from "../View";

class CartIconView extends View {
  _parentElement = document.querySelector(".header__user-cart");
  _createMarkUp() {
    return `
        <p class="cart__count">${this._data.amountOfItems}</p>
        <i class="fas fa-shopping-cart"></i>
        `;
  }
}

export default new CartIconView();
