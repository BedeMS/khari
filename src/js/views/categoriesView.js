import View from "./View";

class CategoriesView extends View {
  _parentElement = document.querySelector(".categories");

  _createMarkUp() {
    return this._data
      .map((category) => {
        return `
        <div class="category" id="${category.title}">
          <img
            src="${category.image}"
            alt="${category.title}"
            class="category__img"
          />
          <a href="/selection.html" class="category__title">${category.title}</a>
        </div>
          `;
      })
      .join(" ");
  }
}

export default new CategoriesView();
