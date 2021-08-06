import View from "../View";

class CheckoutView extends View {
  _parentElement = document.querySelector(".checkout__summary");
  _checkOutBtn = document.querySelector(".btn__cart");

  constructor() {
    super();
    this.toggleCheckout();
  }

  toggleCheckout() {
    if (!this._checkOutBtn) return;
    this._checkOutBtn.addEventListener("click", function (e) {
      this._checkout = document.querySelector(".checkout");
      this._checkout.classList.toggle("show-cart");
      this._checkout.classList.contains("show-cart")
        ? (this.innerText = "Close")
        : (this.innerText = "Checkout");
    });
  }

  _createMarkUp() {
    return `
    <div class="summary">
        <p class="summary__sub">Subtotal</p>
        <p class="summary__amount">$${
          this._data.cartSubTotal ? this._data.cartSubTotal : 0
        }</p>
      </div>
      <div class="summary">
        <p class="summary__sub">Shipping</p>
        <p class="summary__amount">--</p>
      </div>
      <div class="summary">
        <p class="summary__sub">Tax</p>
        <p class="summary__amount">$${
          this._data.cartTaxes ? this._data.cartTaxes : 0
        }</p>
      </div>
      <div class="summary">
        <p class="summary__sub">Total</p>
        <p class="summary__amount">$${
          this._data.cartTotal ? this._data.cartTotal : 0
        }</p>
      </div>
      <button type="button" disable="disabled" class="btn checkout__btn">
        Checkout <i class="fas fa-right"></i>
      </button>
    `;
  }
}

export default new CheckoutView();
