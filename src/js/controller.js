import navigation from "./views/navigation";
import header from "./views/Gender/header";
import { TShirts } from "./products/products";
import * as hoodies from "./products/categories/hoodies";
import * as jackets from "./products/categories/jackets";
import * as shorts from "./products/categories/shorts";
import * as sweaters from "./products/categories/sweaters";
import * as tshirts from "./products/categories/tshirts";

if (module.hot) {
  module.hot.accept();
}

const init = function () {
  // console.log(hoodies.comfort, hoodies.custom, hoodies.graphic);
  // console.log(jackets.comfort, jackets.custom, jackets.graphic);
  // console.log(sweaters.comfort, sweaters.custom, sweaters.slim);
  // console.log(shorts.regular, shorts.long);
  console.log(tshirts.crew, tshirts.vNeck);
};

init();
