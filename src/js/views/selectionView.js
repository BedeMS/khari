import View from "./View";

class selectionView extends View {
  _parentElement = document.querySelector(".main-selection");
  _selection = document.querySelectorAll(".selection");

  addHandlerSelection(handler) {
    this._selection.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        let product;
        if (!e.target.classList.contains("selection")) {
          product = e.target.parentNode.id;
          console.log(product);
        } else if (e.target.classList.contains("selection")) {
          product = e.target.id;
          console.log(product);
        }
        handler(product);
      });
    });
  }

  _createMarkUp() {
    console.log(this._data);
    return this._data.selections.map((el) => {
      return `
      <div class="selection" id="${el.id}">
          <img src=${el.img} alt="${el.name}" class="selection__img" />
          <div class="selection__desc">
            <p class="selection__title">${el.name}</p>
          </div>
        </div>
      `;
    });
  }
}

export default new selectionView();
