import View from "./View";

class categoryView extends View {
  _parentElement = document.querySelector("#man-categories");
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
    console.log(this._data);
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
    // Object.entries(this._data).map(([key, value]) => {
    //   return `
    //   <div class="category" id="${key}">
    //     <img src="./src/img/t-shirt.png" alt="Hoody Picture" class="category__img" />
    //     <a href="selection.html" class="category__title">${key}</a>
    //   </div>
    // `;
    // });
  }
}

export default new categoryView();
