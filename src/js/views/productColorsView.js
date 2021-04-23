import { addClass } from "../helpers";
import View from "./View";

class productColorsView extends View {
  _parentElement = document.querySelector(".colors");
  _colorBtn = document.querySelectorAll(".color");

  renderColor(element) {
    addClass(element, "color-active");
  }

  addHandlerProductColors(handler) {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("color")) {
        const color = e.target.id;
        handler(color, e.target);
      }
    });
  }

  _createMarkUp() {
    const product = JSON.parse(this._data.product).sizes;
    const [size] = product.filter((el) => el.id === this._data.size);

    return `
      ${size.colors
        .map(
          (el, i) =>
            `<span id="${el.id}" class="color ${
              i === 0 ? "color-active" : ""
            }" style="background-color: ${el.id}"></span>`
        )
        .join("")}
    `;
  }
}

export default new productColorsView();
