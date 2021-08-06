import View from "../View";

class cartTrashView extends View {
  addHandlerCartTrash(handler) {
    document.addEventListener("click", (e) => {
      if (e.target.closest(".cart__item-remove")) {
        let cartItem = e.target.closest(".cart__item");
        let product = cartItem.querySelector(".item__title");
        let color = product.getAttribute("data-color");
        let size = product.getAttribute("data-size");
        let itemId = cartItem.id;
        handler({ itemId, color, size });
      }
    });
  }
}

export default new cartTrashView();
