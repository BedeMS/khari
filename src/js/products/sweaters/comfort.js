import { valueObj, getObjects } from "../../helpers";
import uniqid from "uniqid";

const comfort = {
  name: "Comfort",
  category: "Sweater",
  img:
    "https://ramptshirts.com/assets/images/samples/standard-hoodies/light-grey.png",
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
            "https://ramptshirts.com/assets/images/samples/standard-hoodies/royal-blue.png",
        },
        {
          id: "#f6fa00",
          color: "yellow",
          quantity: 9,
          img:
            "https://ramptshirts.com/assets/images/samples/standard-hoodies/gold.png",
        },
        {
          id: "#0b8500",
          color: "green",
          quantity: 4,
          img:
            "https://www.sportyfied.com/thumbs/regular/021031_605_basichoody_f_700x700.png",
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
            "https://ramptshirts.com/assets/images/samples/standard-hoodies/gold.png",
        },
        {
          id: "#c7c7c7",
          color: "grey",
          quantity: 1,
          img:
            "https://ramptshirts.com/assets/images/samples/standard-hoodies/light-grey.png",
        },
      ],
    },
  ],
};

export default comfort;
