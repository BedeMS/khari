import View from "../View";

class ProductColorsView extends View {
  // _parentElement = document.querySelector(".product__img");
  // constructor(){
  //   super();

  // }

  _setParentElement() {
    this._parentElement = document.querySelector(".product__img");
  }

  addProductColorHandler(handler) {
    document.addEventListener("click", function (e) {
      if (e.target.classList.contains("colors__btn")) {
        this._colorsBtns = document.querySelectorAll(".colors__btn");
        this._colorsBtns.forEach((el) => {
          el.classList.remove("color-active");
        });
        e.target.closest(".colors__btn").classList.add("color-active");
        handler(e.target.id);
      }
    });
  }

  _createMarkUp() {
    return `
        <img
          class="product__img-image"
          alt="${this._data.category} ${this._data.name}"
          src="${this._data.image}"
        />
    `;
  }
}

export default new ProductColorsView();
