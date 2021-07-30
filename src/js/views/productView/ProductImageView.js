import View from "../View";

class ProductImageView extends View {
  _setParentElement() {
    this._parentElement = document.querySelector(".product__img");
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

export default new ProductImageView();
