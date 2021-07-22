import uniqid from "uniqid";
import custom from "./custom";
import graphic from "./graphic";
import comfort from "./comfort";

export default {
  name: "Jackets",
  id: uniqid(),
  img:
    "https://purepng.com/public/uploads/large/purepng.com-orange-jacketgarmentupper-bodyjacketlighterorange-1421526362216wbbfz.png",
  selections: [custom, graphic, comfort],
};
