import navigation from "./views/navigation";
import header from "./views/Gender/header";
import * as model from "./model";
import categoriesView from "./views/categoriesView";

if (module.hot) {
  module.hot.accept();
}

const controlCategories = function () {
  // when man page is opened, load man product data
  const categories = model.getCategories()
  console.log(categories)
  categoriesView.render(categories);
};

const init = function () {
  // when man page is clicked, load categories for man
  if (location.pathname === "/man.html") {
    controlCategories();
  }
  // categoriesView.add
};

init();
