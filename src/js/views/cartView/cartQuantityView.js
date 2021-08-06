class cartQuantityView {
  addHandlerCartQuantity(handler) {
    document.addEventListener("change", (e) => {
      if (e.target.classList.contains("cart__item-quantity")) {
        const quantity = +e.target.value;
        const cartItem = e.target.closest(".cart__item")
        let productId = cartItem.id;

        handler({ quantity, productId });
      }
    });
  }
}

export default new cartQuantityView();
