class cartQuantityView {
  addHandlerCartQuantity(handler) {
    document.addEventListener("change", (e) => {
      if (e.target.classList.contains("cart__item-quantity")) {
        const quantity = +e.target.value;
        const cartItem = e.target.closest(".cart__item");
        let product = cartItem.querySelector(".item__title")
        let color = product.getAttribute("data-color");
        let size = product.getAttribute("data-size");
        let productId = cartItem.id;

        handler({ quantity, productId, color, size });
      }
    });
  }
}

export default new cartQuantityView();
