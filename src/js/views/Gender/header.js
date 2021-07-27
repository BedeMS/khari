import View from "../View";

class header extends View {
  _headerMan = document.querySelector(".header__man");
  _headerWoman = document.querySelector(".header__woman");
  constructor() {
    super();
    this.showHeader();
  }

  //add class of top change name height
  showHeader() {
    if (location.pathname === "/man.html") {
      this._headerMan.classList.add("header-active");
    } else if (location.pathname === "/woman.html"){
      this._headerWoman.classList.add("header-active");
    }
  }

  
}

export default new header();
