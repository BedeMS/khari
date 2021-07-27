import navigation from "./views/navigation";
import header from "./views/Gender/header";
import * as model from "./model";
import categoriesView from "./views/categoriesView";

if (module.hot) {
  module.hot.accept();
}

const controlShowCategories = function (gender) {
  // when man/woman page is opened, load category data
  const categories = model.getCategories(gender);

  // Update state, to include current category name
  let state = model.updateState("gender", gender);

  // update localStorage
  model.setLocalStorage("state", state);

  // render categories
  categoriesView.render(categories);
};

const controlCategory = function (categoryName) {
  // Update state, to include current category name
  let state = model.updateState("category", categoryName);

  // update localStorage
  model.setLocalStorage("state", state);
};

const init = function () {
  categoriesView.addHandler(controlCategory);

  // when man page is clicked, load categories for man
  if (location.pathname === "/man.html") {
    controlShowCategories("man");
  } else if (location.pathname === "/woman.html") {
    controlShowCategories("woman");
  }
};

init();
