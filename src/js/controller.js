import navigation from "./views/navigation";
import headerView from "./views/header";
import * as model from "./model";
import categoriesView from "./views/categoriesView";
import selectionsView from "./views/selectionsView";
import productView from "./views/productView/ProductView";


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
const controlShowSelections = function () {
  // Render Correct Header from state
  let { gender, category } = model.getLocalStorage("state");
  headerView.render({ gender, category });

  // Get current selections
  let selections = model.getSelections();
  // Render Selection on page load;
  selectionsView.render(selections);
};

// Get Product Name the user picks on the selection page
const controlSelections = function(productName){
  // update state for current Products
  let state = model.updateState("product", productName)
  // persist data into LocalStorage
  model.setLocalStorage("state", state);
}

// Render Products based on current state;
const controlShowProducts = function(){
  let [product] = model.getProducts();
  console.log(product);
  productView.render(product);
}



const init = function () {
  categoriesView.addHandler(controlCategory);
  selectionsView.addProductHandler(controlSelections)

  // when man page is clicked, load categories for man
  if (location.pathname === "/man.html") {
    controlShowCategories("man");
  } else if (location.pathname === "/woman.html") {
    controlShowCategories("woman");
  };

  if (location.pathname === "/selection.html") {
    // render category selections
    controlShowSelections();
  };

  if(location.pathname === "/product.html"){
    controlShowProducts();
  }
};

init();
