import navigation from "./views/navigation";
import header from "./views/Gender/header";
import { TShirt } from "./products/productss";

if (module.hot) {
  module.hot.accept();
}

const tShirts = new TShirt("Crew", [
  { size: "xl", color: "blue", quantity: 9 },
  { size: "sm", color: "blue", quantity: 9 },
]);
// [{size: "xl", color: "blue",  quantity: 9 }]
tShirts._addProducts([{ size: "md", color: "blue", quantity: 9 }]);
tShirts._addImages([
  { blue: "www.google.com" },
  { yellow: "www.facebook.com" },
]);
tShirts._addProducts([{ size: "xs", color: "red", quantity: 2 }]);

const init = function () {
  console.log(tShirts);
};

init();
