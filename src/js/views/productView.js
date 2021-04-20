import View from "./View";

class ProductView extends View {
  _parentElement;
  _data;

  render(data) {
    console.log(document.readyState);
    // this._data = data;
    // console.log(this._data);
    // document.addEventListener("DOMContentLoaded", () => {
    //   // console.log(this._data);
    //   this._parentElement = document.querySelector(".product");
    //   alert(this._parentElement);
    // });
  }

  // renderProductPage(data) {
  //   console.log(data);
  //   this._data = data;
  //   // window.location.assign("http://localhost:1234/product.html");
  // }

  _createMarkUp() {
    return `
    <h1 class="product__title">${this._data.name}</h1>
        <p class="product__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          eveniet optio in ea nisi tempora aliquid quas adipisci. Accusamus
          reiciendis, dolorem officia, autem neque odit tempor a non dolor, ab
          ipsam minima asperiores saepe assumenda at quae? Amet debitis
          voluptatem sint.
        </p>
        <p class="product__price">${this._data.price}</p>
        <div class="product__images">
          <img src=${this._data.xs.colors.black.img} alt="" class="product__img" />

          <img src=${this._data.xs.colors.black.img} alt="" class="product__img" />

          <img src=${this._data.xs.colors.black.img} alt="" class="product__img" />
        </div>
      </div> 
      <div class="product__image-holder">
        <img
          src=${this._data.xs.colors.black.img}
          class="main__product-img"
          alt="T-shirt Image"
        />
      </div>
      <div class="product__options">
        <div class="product__options-sizes">
          <p>Sizes:</p>
          <div class="sizes">
            <span class="size-btn size-active">XS</span>
            <span class="size-btn">SM</span>
            <span class="size-btn">MD</span>
            <span class="size-btn">LG</span>
          </div>
        </div>
        <div class="product__options-colors">
          <p>Colors:</p>
          <div class="colors">
            <span class="color color-active"></span>
            <span class="color"></span>
            <span class="color"></span>
            <span class="color"></span>
            <span class="color"></span>
            <span class="color"></span>
            <span class="color"></span>
            <span class="color"></span>
          </div>
        </div>
        <div class="product__options-quantity">
          <p>Quantity</p>
          <input type="number" id="quantity" />
        </div>
        <button class="btn btn-cart">
          <i class="fas fa-shopping-cart"></i> Add To Cart
        </button> */
    `;
  }
  // _sizesMarkup(){
  // loop through obj and get length
  // }
}

export default new ProductView();

{
  /* <h1 class="product__title">Crew</h1>
        <p class="product__desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
          eveniet optio in ea nisi tempora aliquid quas adipisci. Accusamus
          reiciendis, dolorem officia, autem neque odit tempor a non dolor, ab
          ipsam minima asperiores saepe assumenda at quae? Amet debitis
          voluptatem sint.
        </p>
        <p class="product__price">$15</p>
        <div class="product__images">
          <img src="/src/img/t-shirt.png" alt="" class="product__img" />

          <img src="/src/img/t-shirt.png" alt="" class="product__img" />

          <img src="/src/img/t-shirt.png" alt="" class="product__img" />
        </div>
      </div> 
      <div class="product__image-holder">
        <img
          src="/src/img/t-shirt.png"
          class="main__product-img"
          alt="T-shirt Image"
        />
      </div>
      <div class="product__options">
        <div class="product__options-sizes">
          <p>Sizes:</p>
          <div class="sizes">
            <span class="size-btn size-active">XS</span>
            <span class="size-btn">SM</span>
            <span class="size-btn">MD</span>
            <span class="size-btn">LG</span>
          </div>
        </div>
        <div class="product__options-colors">
          <p>Colors:</p>
          <div class="colors">
            <span class="color color-active"></span>
            <span class="color"></span>
            <span class="color"></span>
            <span class="color"></span>
            <span class="color"></span>
            <span class="color"></span>
            <span class="color"></span>
            <span class="color"></span>
          </div>
        </div>
        <div class="product__options-quantity">
          <p>Quantity</p>
          <input type="number" id="quantity" />
        </div>
        <button class="btn btn-cart">
          <i class="fas fa-shopping-cart"></i> Add To Cart
        </button> */
}
