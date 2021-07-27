import View from "./View";
import {capitalizeFirstLetter} from "../utils"

class SelectionsHeaderView extends View {
  _parentElement = document.querySelector(".header__menu");

  _createMarkUp() {
    return `
        <a
        href="woman.html"
        aria-label="View ${this._data.gender} Clothe"
        class="header__menu-item header-active"
        >${capitalizeFirstLetter(this._data.gender)}</a
      >
      <p aria-label="${this._data.gender} ${this._data.category}" class="header__menu-item">${this._data.category}</p>
    `;
  }
}

export default new SelectionsHeaderView();
