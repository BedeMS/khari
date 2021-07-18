import View from "./View";

class navigation extends View {
  _nav = document.querySelector(".nav");
  _navBtn = document.querySelector(".header__nav");
  _navClose = document.querySelector(".nav__close");

  constructor() {
    super();
    this.showNav();
    this.hideNav();
  }

  showNav() {
    this._navBtn.addEventListener("click", this._openNav.bind(this));
    
  }

  hideNav() {
    this._navClose.addEventListener("click", this._closeNav.bind(this));
  }

  _openNav() {
    this._addClass("nav-active", this._nav);
    this._addClass("nav__close-active", this._navClose);
  }

  _closeNav() {
    this._removeClass("nav-active", this._nav);
    this._removeClass("nav__close-active", this._navClose);
  }
}

export default new navigation();
