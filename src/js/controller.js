import navigation from "./views/navigation";
import header from "./views/Gender/header";
import * as model from "./model";
import categoriesView from "./views/categoriesView";
import selectionsView from "./views/selectionsView";
import selectionsHeaderView from "./views/selectionsHeaderView";

if (module.hot) {
  module.hot.accept();
}

// Gets the correct Categories based on Gender
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

// Gets Category Name from Event man/woman Page and updates state
const controlCategory = function (categoryName) {
  // Update state, to include current category name
  let state = model.updateState("category", categoryName);
  // update localStorage
  model.setLocalStorage("state", state);
};

// Renders Selections based on the current Category in state
const controlSelections = function () {
  // Render Correct Header from state
  let { gender, category } = model.getLocalStorage("state");
  selectionsHeaderView.render({ gender, category });

  // Get current selections
  let selections = model.getSelections();
  // Render Selection on page load;
  selectionsView.render(selections);
};

const init = function () {
  categoriesView.addHandler(controlCategory);

  // when man page is clicked, load categories for man
  if (location.pathname === "/man.html") {
    controlShowCategories("man");
  } else if (location.pathname === "/woman.html") {
    controlShowCategories("woman");
  }

  if (location.pathname === "/selection.html") {
    // render category selections
    controlSelections();
  }
};

init();
