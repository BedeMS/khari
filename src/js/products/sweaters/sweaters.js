import uniqid from "uniqid";
import custom from "./custom";
import slim from "./slim";
import comfort from "./comfort";

export default {
  name: "Sweaters",
  id: uniqid(),
  img:
    "https://ramptshirts.com/assets/images/samples/standard-hoodies/light-grey.png",
  selections: [custom, slim, comfort],
};
