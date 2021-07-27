import View from "./View";

class SelectionsView extends View {
  _parentElement = document.querySelector(".selections");

  addProductHandler(handler){
    document.addEventListener("click", e => {
      if(e.target.classList.contains("select__title")){
        // e.preventDefault();
        handler(e.target.textContent);
      }
    })
  }

  _createMarkUp() {
    return this._data
      .map((selection) => {
        return `
            <div class="select" id="${selection.name}">
                <img
                    src="${selection.categoryImage}"
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
