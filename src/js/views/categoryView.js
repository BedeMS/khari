import View from "./View";

class categoryView extends View {
  _parentElement = document.querySelector(".categories");
  _category = document.querySelectorAll(".category__title");

  addHandlerCategory(handler) {
    this._category.forEach((el) => {
      el.addEventListener("click", (e) => {
        let category = e.target.parentElement.id;
        handler(category);
      });
    });
  }

  _createMarkUp() {
    return `
      <div class="category" id="hoodies">
        <img src="./src/img/t-shirt.png" alt="Hoody Picture" class="category__img" />
        <a href="selection.html" class="category__title">Hoody</a>
      </div>
    `;
  }
}

export default new categoryView();
