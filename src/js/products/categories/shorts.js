import { Shorts } from "../products";

//----------------------------------------------------------------
// COMFORT HOODIES
// {Name, Price, Add Products}
export const regular = new Shorts("Regular", 15, [
  { size: "md", color: "yellow", quantity: 5 },
  { size: "md", color: "red", quantity: 18 },
  { size: "md", color: "orange", quantity: 9 },
  { size: "md", color: "white", quantity: 6 },
]);

regular._addImages([
  {
    yellow:
      "https://www.hummel.net/dw/image/v2/BDWL_PRD/on/demandware.static/-/Sites-hummel-master-catalog/default/dwd1cbb7e4/images/packshot/111083-5007_1.png?sw=514&sh=685&sm=fit&q=80",
  },
  {
    red:
      "https://cdn.shopify.com/s/files/1/1682/7299/products/MASHPFM2-R_1400x.png?v=1538789801",
  },
  {
    orange:
      "https://images.footlocker.com/is/3495820/large_wide/nike-team-flex-woven-pocket-2.0-shorts-mens",
  },
  {
    white:
      "https://www.transparentpng.com/thumb/shorts/nike-laser-woven-printed-shorts-adults-png-16.png",
  },
]);

//----------------------------------------
// GRAPHIC

export const long = new Shorts("Long", 25, [
  { size: "md", color: "black", quantity: 9 },
]);

graphic._addImages([
  {
    black: "https://i.ebayimg.com/images/g/K-kAAOSwE8daYWJo/s-l300.png",
  },
]);
