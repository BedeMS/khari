import { valueObj, getObjects } from "../../helpers";
import uniqid from "uniqid";

const comfort = {
  name: "Comfort",
  category: "Jacket",
  img:
    "https://purepng.com/public/uploads/large/purepng.com-orange-jacketgarmentupper-bodyjacketlighterorange-1421526362216wbbfz.png",
  id: uniqid(),
  price: 15.0,
  sizes: [
    {
      id: "md",
      colors: [
        {
          id: "#4034eb",
          color: "blue",
          quantity: 2,
          img:
            "https://purepng.com/public/uploads/large/purepng.com-orange-jacketgarmentupper-bodyjacketlighterorange-1421526362216wbbfz.png",
        },
        {
          id: "#f6fa00",
          color: "yellow",
          quantity: 9,
          img:
            "https://purepng.com/public/uploads/large/purepng.com-orange-jacketgarmentupper-bodyjacketlighterorange-1421526362216wbbfz.png",
        },
        {
          id: "#0b8500",
          color: "green",
          quantity: 4,
          img:
            "https://purepng.com/public/uploads/large/purepng.com-orange-jacketgarmentupper-bodyjacketlighterorange-1421526362216wbbfz.png",
        },
      ],
    },
    {
      id: "lg",
      colors: [
        {
          id: "#f6fa00",
          color: "yellow",
          quantity: 3,
          img:
            "https://purepng.com/public/uploads/large/purepng.com-orange-jacketgarmentupper-bodyjacketlighterorange-1421526362216wbbfz.png",
        },
        {
          id: "#c7c7c7",
          color: "grey",
          quantity: 1,
          img:
            "https://purepng.com/public/uploads/large/purepng.com-orange-jacketgarmentupper-bodyjacketlighterorange-1421526362216wbbfz.png",
        },
      ],
    },
  ],
};

export default comfort;
