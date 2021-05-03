import uniqid from "uniqid";
import custom from "./custom";
import graphic from "./graphic";
import comfort from "./comfort";

export default {
  name: "Jackets",
  id: uniqid(),
  img:
    "https://ramptshirts.com/assets/images/samples/standard-hoodies/light-grey.png",
  selections: [custom, graphic, comfort],
};
