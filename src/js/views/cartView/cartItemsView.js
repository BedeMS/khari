import View from "../View";
import {capitalizeFirstLetter} from "../../utils"

class CartItemsView extends View {
  _parentElement = document.querySelector(".cart");

  _createMarkUp() {
    return `
        <p class="cart__title">Shopping Cart</p>
        <p class="cart__desc">You have ${
          this._data.cartQuantity
        } items in your cart</p>
        ${this._data.cart.map(this._cartItemMarkUp).join(" ")}
        `;
  }

  _cartItemMarkUp(item, ind, arr) {
    let gender = capitalizeFirstLetter(item.gender);
    let color = capitalizeFirstLetter(item.color);
    let size = capitalizeFirstLetter(item.size);
    return `
      <div class="cart__item">
        <img
            class="cart__item-img"
            src="${item.itemImage}"
            alt="${item.product} ${item.category}"
        />
        <div class="cart__item-desc">
            <a href="product.html" class="item__title">${item.product} ${item.category}</a>
            <p class="item__desc">${gender} ${color} ${size}</p>
        </div>
        <input min="1" value="${item.quantity}" type="number" class="cart__item-quantity" />
        <p class="cart__item-price">$${item.totalPrice.toFixed(2)}</p>
        <button class="cart__item-remove">
            <i class="fas fa-trash"></i>
        </button>
      </div>
    
    `;
  }
}

export default new CartItemsView();
