import View from "./View";

class categoryView extends View {
  _parentElement = document.querySelector("#man-categories");
  _category;

  addHandlerCategory(handler) {
    document.addEventListener("DOMContentLoaded", () => {
      this._category = document.querySelectorAll(".category__title");

      this._category.forEach((el) => {
        el.addEventListener("click", (e) => {
          let category = e.target.parentElement.id;
          handler(category);
        });
      });
    });
  }

  _createMarkUp() {
    return this._data
      .map((el) => {
        return `
      <div class="category" id="${el.name}">
        <img src=${el.img} alt="${el.name} Picture" class="category__img" />
        <a href="selection.html" class="category__title">${el.name}</a>
      </div>
      `;
      })
      .join("");
  }
}

export default new categoryView();
