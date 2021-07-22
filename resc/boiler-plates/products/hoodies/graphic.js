import { valueObj, getObjects } from "../../helpers";
import uniqid from "uniqid";

const graphic = {
  name: "Graphic",
  category: "Hoody",
  img:
    "https://www.pngkit.com/png/full/96-964734_red-hoodie-png-hundreds-zip-up-hoodie.png",
  id: uniqid(),
  price: 45.0,
  sizes: [
    {
      id: "xs",
      colors: [
        {
          id: "#E61938",
          color: "red",
          quantity: 5,
          img:
            "https://www.pngkit.com/png/full/96-964734_red-hoodie-png-hundreds-zip-up-hoodie.png",
        },
        {
          id: "#4034eb",
          color: "blue",
          quantity: 5,
          img:
            "https://ramptshirts.com/assets/images/samples/standard-hoodies/royal-blue.png",
        },
        {
          id: "#c7c7c7",
          color: "grey",
          quantity: 5,
          img:
            "https://ramptshirts.com/assets/images/samples/standard-hoodies/light-grey.png",
        },
      ],
    },
    {
      id: "sm",
      colors: [
        {
          id: "#ffffff",
          color: "white",
          quantity: 9,
          img:
            "https://i.pinimg.com/originals/40/5c/47/405c4744c53d43be0e32dfe17e941696.png",
        },
        {
          id: "#4034eb",
          color: "blue",
          quantity: 1,
          img:
            "https://ramptshirts.com/assets/images/samples/standard-hoodies/royal-blue.png",
        },
        {
          id: "#f6fa00",
          color: "yellow",
          quantity: 12,
          img:
            "https://ramptshirts.com/assets/images/samples/standard-hoodies/gold.png",
        },
        {
          id: "#0b8500",
          color: "green",
          quantity: 9,
          img:
            "https://www.sportyfied.com/thumbs/regular/021031_605_basichoody_f_700x700.png",
        },
        {
          id: "#c7c7c7",
          color: "grey",
          quantity: 8,
          img:
            "https://ramptshirts.com/assets/images/samples/standard-hoodies/light-grey.png",
        },
      ],
    },
    {
      id: "md",
      colors: [
        {
          id: "#000000",
          color: "black",
          quantity: 1,
          img:
            "https://cdn.shopify.com/s/files/1/1151/0394/products/hoodie_large.png",
        },
        {
          id: "#f6fa00",
          color: "yellow",
          quantity: 9,
          img:
            "https://ramptshirts.com/assets/images/samples/standard-hoodies/gold.png",
        },
        {
          id: "#c7c7c7",
          color: "grey",
          quantity: 2,
          img:
            "https://ramptshirts.com/assets/images/samples/standard-hoodies/light-grey.png",
        },
      ],
    },
    {
      id: "lg",
      colors: [
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

export default graphic;
