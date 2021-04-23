import View from "./View";

class ProductImageView extends View {
  _parentElement = document.querySelector(".product__image-holder");

  _createMarkUp() {
    const product = JSON.parse(this._data.product).sizes;
    const [size] = product.filter((el) => el.id === this._data.size);
    const [color] = size.colors.filter((el) => el.id === this._data.color);

    return `
    <img
    src="${color.img}"
    class="main__product-img"
    alt="${this._data.selection} Image"
  /> 
        `;
  }
}

export default new ProductImageView();
