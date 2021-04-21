import selectionView from "./views/selectionView";
import * as model from "./model";
import products from "./products/products";

//get category name from storage
const [category] = products.filter((el) =>
  el.name === sessionStorage.getItem("category") ? el : ""
);

// render products
selectionView.render(category);
