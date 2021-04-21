import categoryView from "./categoryView";

class NavigationView {
  _nav = document.querySelector(".nav");
  _navContainer = document.querySelector(".nav-container-side");
  _product = document.querySelectorAll(".product");
  _navBtn = document.querySelector(".header__nav-btn");
  _man = document.querySelectorAll(".man");

  addHandlerNav(handler) {
    [this._navContainer, this._navBtn].forEach((el) => {
      el.addEventListener("click", () => {
        handler();
      });
    });
  }

  toggleNav() {
    this._nav.classList.toggle("nav-active");
    this._navContainer.classList.toggle("nav-container-active");
  }
}

export default new NavigationView();
