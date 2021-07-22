import navigation from "./views/navigation";
import header from "./views/Gender/header";
import { TShirts } from "./products/products";
import * as hoodies from "./products/categories/hoodies";
import * as jackets from "./products/categories/jackets";

if (module.hot) {
  module.hot.accept();
}

// const tShirts = new TShirts("Crew", [
//   { size: "xl", color: "blue", quantity: 9 },
//   { size: "sm", color: "blue", quantity: 9 },
// ]);
// // [{size: "xl", color: "blue",  quantity: 9 }]
// tShirts._addProducts([{ size: "md", color: "blue", quantity: 9 }]);
// tShirts._addImages([
//   { blue: "www.google.com" },
//   { yellow: "www.facebook.com" },
// ]);
// tShirts._addProducts([{ size: "xs", color: "red", quantity: 2 }]);

const init = function () {
  // console.log(hoodies.comfort, hoodies.custom, hoodies.graphic);
  // console.log(jackets.comfort, jackets.custom, jackets.graphic);
};

init();
