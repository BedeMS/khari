import View from "./View";

class CategoriesView extends View {
  _parentElement = document.querySelector(".categories");

  addHandler(handler) {
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("category__title")) {
        e.preventDefault();
        console.log(e.target.id);
        handler(e.target.id)
      }
    });
  }

  _createMarkUp() {
    return this._data
      .map((category) => {
        return `
        <div class="category">
          <img
            src="${category.image}"
            alt="${category.title}"
            class="category__img"
          />
          <a href="/selection.html" id="${category.title}" class="category__title">${category.title}</a>
        </div>
          `;
      })
      .join(" ");
  }
}

export default new CategoriesView();
