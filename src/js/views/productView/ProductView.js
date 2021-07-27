import View from "../View";

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
            alt="***Product Photo"
            src="./src/assets/img/t-shirt.png"
          />
        </div>
      </div>
      <div class="product__img">
        <img
          class="product__img-image"
          alt="***Product Photo"
          src="${data.images.black}"
        />
      </div>
      <div class="product__pref">
        <div class="product__sizes">
          <label class="product__pref-title">Sizes</label>
          <div class="sizes">
            <button class="sizes__btn">XS</button>
            <button class="sizes__btn">SM</button>
            <button class="sizes__btn">MD</button>
            <button class="sizes__btn">LG</button>
          </div>
        </div>
        <div class="product__colors">
          <label class="product__pref-title">Colors</label>
          <div class="colors">
            <button aria-label="**Name Of Color" class="colors__btn"></button>
            <button aria-label="**Name Of Color" class="colors__btn"></button>
            <button aria-label="**Name Of Color" class="colors__btn"></button>
            <button aria-label="**Name Of Color" class="colors__btn"></button>
            <button aria-label="**Name Of Color" class="colors__btn"></button>
            <button aria-label="**Name Of Color" class="colors__btn"></button>
          </div>
        </div>
        <div class="product__quantity">
          <label class="product__pref-title">Quantity</label>
          <input type="number" class="quantity" min="1" />
        </div>
        <button type="button" class="btn add-to-cart">Add To Cart</button>
        `;
  }
}

export default new ProductView();
