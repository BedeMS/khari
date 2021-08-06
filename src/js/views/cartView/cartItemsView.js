import View from "../View";
import { capitalizeFirstLetter } from "../../utils";

class CartItemsView extends View {
  _parentElement = document.querySelector(".cart");

  addHandlerCartLink(handler) {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("item__title")) {
        e.preventDefault();
        let category = e.target.getAttribute("data-category");
        let product = e.target.getAttribute("data-product");
        let gender = e.target.getAttribute("data-gender");
        let color = e.target.getAttribute("data-color");
        let size = e.target.getAttribute("data-size");

        handler({ category, product, gender, color, size });
      }
    });
  }

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
      <div class="cart__item" id="${item.id}">
        <img
            class="cart__item-img"
            src="${item.itemImage}"
            alt="${item.product} ${item.category}"
        />
        <div class="cart__item-desc">
            <a href="product.html" class="item__title"
            data-category="${item.category}"
            data-product="${item.product}"
            data-gender="${item.gender}"
            data-color="${item.color}"
            data-size="${item.size}"
            >${item.product} ${item.category}</a>
            <p class="item__desc">${gender} ${color} ${size}</p>
        </div>
        <input min="1" value="${
          item.quantity
        }" type="number" class="cart__item-quantity" />
        <p class="cart__item-price">$${item.totalPrice.toFixed(2)}</p>
        <button class="cart__item-remove">
            <i class="fas fa-trash"></i>
        </button>
      </div>
    
    `;
  }
}

export default new CartItemsView();
