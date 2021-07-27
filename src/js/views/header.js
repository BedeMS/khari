import View from "./View";
import {capitalizeFirstLetter} from "../utils"

class HeaderView extends View {
  _headerMan = document.querySelector(".header__man");
  _headerWoman = document.querySelector(".header__woman");
  _parentElement = document.querySelector(".header__menu");
  constructor() {
    super();
    this.showHeader();
  }

  _createMarkUp() {
    return `
        <a
        href="${this._data.gender}.html"
        aria-label="View ${this._data.gender} Clothe"
        class="header__menu-item header-active"
        >${capitalizeFirstLetter(this._data.gender)}</a
      >
      <p aria-label="${this._data.gender} ${this._data.category}" class="header__menu-item">${this._data.category}</p>
    `;
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

export default new HeaderView();
