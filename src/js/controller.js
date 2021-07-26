import navigation from "./views/navigation";
import header from "./views/Gender/header";
import { products } from "./products/finalProducts";

if (module.hot) {
  module.hot.accept();
}

const init = function () {
  console.log(products);
};

init();
