class categoryView {
  _category = document.querySelectorAll(".category__title");

  addHandlerCategory(handler) {
    this._category.forEach((el) => {
      el.addEventListener("click", (e) => {
        let category = e.target.parentElement.id;
        handler(category);
      });
    });
  }
}

export default new categoryView();
