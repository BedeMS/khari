import View from "./View";

class selectionView extends View {
  _parentElement = document.querySelector(".main-selection");
  _selection = document.querySelectorAll(".selection");

  addHandlerSelection(handler) {
    this._selection.forEach((el) => {
      el.addEventListener("click", (e) => {
        e.stopPropagation();
        let product = el.querySelector(".selection__title").textContent;
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
