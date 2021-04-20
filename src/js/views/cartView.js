import View from "./View";
import { isEmpty } from "../helpers";

class cartView extends View {
  _cartQuantity;
  _cartCheckout;
  _parentElement = document.querySelector(".cart");
  _cartViewBtn = document.querySelectorAll(".header__cart");

  addHandlerDeleteItem(handler) {
    window.addEventListener("DOMContentLoaded", function () {
      document.addEventListener("click", function (e) {
        // console.log(e.target.parentElement);
        let itemId;
        if (e.target.classList.contains("cart__item-delete")) {
          console.log(e.target.parentElement.parentElement.id);
          itemId = e.target.parentElement.parentElement.id;
          handler(itemId);
          return;
        }
      });
    });
  }

  addHandlerUpdateQuantity(handler) {
    window.addEventListener("load", function () {
      document.addEventListener("change", function (e) {
        let itemId, newQuantity;
        if (e.target.classList.contains("cart__quantity-value")) {
          itemId = e.target.parentElement.parentElement.id;
          newQuantity = e.target.value;
          handler(itemId, newQuantity);
          return;
        }
      });
    });
  }

  addHandlerRenderCheckoutForm(handler) {
    window.addEventListener("load", function () {
      document.addEventListener("click", function (e) {
        if (e.target.classList.contains("btn__cart-checkout")) {
          handler();
        }
      });
    });
  }

  _createMarkUp() {
    const [cart, cartTotal] = this._data;
    return `
    <tr class="cart__row">
        <th class="cart__heading">Product</th>
        <th class="cart__heading">Quantity</th>
        <th class="cart__heading">Total Price</th>
    </tr>
    ${cart.map(this._generateCartItems)}
    ${
      isEmpty(cartTotal)
        ? ""
        : `
    <tr class="cart__row">
        <td class="cart__shipping">Shipping</td>
        <td class="cart__tax"></td>
        <td class="cart__shipping-cost">${cartTotal.shipping}</td>
    </tr>
    <tr class="cart__row">
        <td class="cart__tax">Tax</td>
        <td class="cart__tax"></td>
        <td class="cart__tax-cost">${cartTotal.tax}</td>
    </tr>
    <tr class="cart__row">
        <td class="cart__total">Total</td>
        <td class="cart__total-quantity">${cartTotal.totalQuantity}</td>
        <td class="cart__total-cost">${cartTotal.totalCost}</td>
    </tr>
    <tr class="cart__row">
        <td class="cart__total"></td>
        <td class="cart__total-quantity"></td>
        <td class="cart__total-cost">
        <button class="btn btn__cart-checkout">Checkout</button>
        </td>
  </tr>`
    }`;
  }

  _generateCartItems(el) {
    return `<tr class="cart__row" id=${el.id}>
        <td class="cart__item">
        <i class="fas fa-trash-alt cart__item-delete"></i>${el.category}, ${el.product}: ${el.size} ${el.color}
        </td>
        <td class="cart__quantity"><input class="cart__quantity-value" min=1 type="number" value=${el.quantity} /></td>
        <td class="cart__cost">${el.total}</td>
    </tr>`;
  }
  //     category: "T-Shirt"
  // color: "red"
  // price: 12.99
  // product: "V-Neck"
  // quantity: 2
  // size: "sm"
  // total: 25.98
  //       `<tr class="cart__row">
  //       <td class="cart__item">
  //       <i class="fas fa-trash-alt cart__item-delete"></i>Jill
  //       </td>
  //       <td class="cart__quantity"><input type="number" value="4" /></td>
  //       <td class="cart__cost">${}</td>
  //   </tr>`
}

export default new cartView();
