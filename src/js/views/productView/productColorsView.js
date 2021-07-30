import View from "../View";

class ProductColorsView extends View {
  _setParentElement() {
    this._parentElement = document.querySelector(".colors");
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
    return this._data.map((color, ind) => {
      return `
      <button aria-label="${color}" id="${color}" style="background-color:${color}" class="colors__btn  ${
        ind === 0 ? "color-active" : ""
      }"></button>
      `;
    }).join("");
  }
}

export default new ProductColorsView();
