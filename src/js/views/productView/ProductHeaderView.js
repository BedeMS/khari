import View from "../View";
import { capitalizeFirstLetter } from "../../utils";

class ProductHeaderView extends View {
  _parentElement = document.querySelector(".header__menu");

  _createMarkUp() {
    console.log(this._data);
    return `<a
          href="woman.html"
          aria-label="View ${this._data.gender}'s Clothe"
          class="header__menu-item header-active"
          >${capitalizeFirstLetter(this._data.gender)}</a
        >
        <a href="/selection.html" aria-label="${this._data.category}" class="header__menu-item"
          >${this._data.product}</a
        >`;
  }
}

export default new ProductHeaderView();
