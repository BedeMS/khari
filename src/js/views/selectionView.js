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
    return this._data.map((el) => {
      return `
      <div class="selection" id="${el.id}">
          <img src="/src/img/t-shirt.png" alt="Crew" class="selection__img" />
          <div class="selection__desc">
            <p class="selection__title">${el.name}</p>
          </div>
        </div>
      `;
    });
  }
}

export default new selectionView();
