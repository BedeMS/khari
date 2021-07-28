import View from "../View";
import { checkObjEmpty } from "../../utils";

class ProductView extends View {
  _parentElement = document.querySelector(".product-main");

  _createMarkUp() {
    let data = this._data;
    return `
        <div class="product__desc">
        <h1 class="product__desc-title">${data.name}</h1>
        <p class="product__desc-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit
          ducimus nostrum labore corporis consectetur quis sapiente minus. Totam
          delectus est voluptatem, quidem reiciendis, minus doloribus quasi
          tenetur dolores et ratione perferendis nisi dolore deserunt nam rerum
          ullam architecto animi minima maxime nostrum! Molestias doloribus
          excepturi at iure id similique ut quasi molestiae ullam voluptatem.
          Nobis maxime vitae sunt voluptatum?
        </p>
        <p class="product__desc-price">$${data.price}</p>
        <div class="product__desc-images">
          <img
            class="desc__image"
            alt="${data.category} ${data.name}"
            src="${data.categoryImage}"
          />
        </div>
      </div>
      <div class="product__img">
        <img
          class="product__img-image"
          alt="${data.category} ${data.name}"
          src="${data.categoryImage}"
        />
      </div>
      <div class="product__pref">
        <div class="product__sizes">
          <label class="product__pref-title">Sizes</label>
          <div class="sizes">
          ${this._renderSizes()
            .map((size, ind) => {
              return `<button id="${size}" aria-label="${size}" class="sizes__btn ${
                ind === 0 ? "size-active" : ""
              }">${size.toUpperCase()}</button>`;
            })
            .join("")}
          </div>
        </div>
        <div class="product__colors">
          <label class="product__pref-title">Colors</label>
          <div class="colors">
          ${this._renderColors()
            .map((color, ind) => {
              return `
            <button aria-label="${data.category} ${
                data.name
              } ${color}" style="background-color:${color}" class="colors__btn  ${
                ind === 0 ? "color-active" : ""
              }"></button>
            `;
            })
            .join("")}
          </div>
        </div> 
        <div class="product__quantity">
          <label class="product__pref-title">Quantity</label>
          <input type="number" class="quantity" min="1" />
        </div>
        <button type="button" class="btn add-to-cart">Add To Cart</button>
        `;
  }

  _renderSizes() {
    let sizes = [];
    for (let property in this._data.sizes) {
      // if obj is not empty, meaning there are contents in the size.
      if (!checkObjEmpty(this._data.sizes[property])) {
        sizes.push(property);
      }
    }
    return sizes;
  }

  // get the first size that's not empty and render that sizes colors.
  _renderColors() {
    let colors = [];
    // find the first size
    for (let property in this._data.sizes) {
      // if obj is not empty, meaning there are contents in the size.
      if (!checkObjEmpty(this._data.sizes[property])) {
        colors.push(this._data.sizes[property]);
      }
    }

    // the final set that we want;
    let color = [];
    for (let property in colors[0]) {
      color.push(property);
    }

    return color;
  }
}

export default new ProductView();
