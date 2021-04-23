import productView from "./views/productView";
import * as model from "./model";
import products from "./products/products";

//get product from storage
const product = JSON.parse(sessionStorage.getItem("product"));


productView.render(product);
