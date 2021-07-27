import View from "./View";

class SelectionsView extends View {
  _parentElement = document.querySelector(".selections");

  _createMarkUp() {
    return this._data
      .map((selection) => {
        return `
            <div class="select" id="${selection.name}">
                <img
                    src="${selection.image}"
                    alt="${selection.name}"
                    class="select__img"
                />
                <a href="/product.html" class="select__title">${selection.name}</a>
            </div>
            `;
      })
      .join("");
  }
}

export default new SelectionsView();
