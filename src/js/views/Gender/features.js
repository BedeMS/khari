import View from "../View";

class featuredMan extends View {
  _parentElement = document.querySelector(".featured");
  constructor() {
    super();
  }

  _createMarkUp() {
    return `
        <div class="featured__main">
            <div class="featured__main-desc">
            <h2 class="featured__main-title">Newest T-Shirts</h2>
            <button type="button" class="btn featured__main-btn">
                Shop Now
            </button>
            <img
                src="./src/assets/img/KhariLogoWhite.png"
                alt="Khari Logo"
                class="featured__main-logo"
            />
            </div>
            <img
            src="./src/assets/img/model2.png"
            alt="Khari male model wearing Khari Jacket and Khari T-shirt"
            class="featured__main-image"
            />
        </div>
        <div class="featured__bottom">
            <div class="featured__bottom-box">
            <p class="featured__bottom-title">Accessories</p>
            <img
                src="./src/assets/img/hat.png"
                alt="Khari Hat"
                class="featured__box-img"
            />
            <a
                href="#"
                aria-label="Shop for Accessories"
                class="featured__bottom-link"
                >--Shop Now</a
            >
            </div>
            <div class="featured__bottom-box">
            <img
                src="./src/assets/img/maleModel3.png"
                alt="Khari Hat"
                class="featured__box-img"
            />
            <p class="featured__bottom-title">Designer Sweaters</p>
            <a
                href="#"
                aria-label="Shop for Designer Sweaters"
                class="featured__bottom-link"
                >--Shop Now</a
            >
            </div>
            <div class="featured__bottom-box">
            <img
                src="./src/assets/img/glasses.png"
                alt="Khari Hat"
                class="featured__box-img"
            />
            <p class="featured__bottom-title">Essentials</p>
            <a
                href="#"
                aria-label="Shop for Essentials"
                class="featured__bottom-link"
                >--Shop Now</a
            >
            </div>
        </div>
    `;
  }
}

export default new features();
