import View from "../View";

class ProductSizesView extends View {
  
  addProductSizeHandler(handler) {
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("sizes__btn")) {
        this._sizesBtns = document.querySelectorAll(".sizes__btn");
        this._sizesBtns.forEach((el) => {
          el.classList.remove("size-active");
        });
        e.target.closest(".sizes__btn").classList.add("size-active");
        handler(e.target.id);
      }
    });
  }
}

export default new ProductSizesView();
