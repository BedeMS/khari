import { valueObj, getObjects } from "../../helpers";
import uniqid from "uniqid";

const custom = {
  name: "Custom",
  category: "Hoody",
  img:
    "https://ramptshirts.com/assets/images/samples/standard-hoodies/light-grey.png",
  id: uniqid(),
  price: 15.0,
  sizes: [
    {
      id: "xs",
      colors: [
        {
          id: "#000000",
          color: "black",
          quantity: 5,
          img:
            "https://cdn.shopify.com/s/files/1/1151/0394/products/hoodie_large.png",
        },
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
          id: "#000000",
          color: "black",
          quantity: 2,
          img:
            "https://cdn.shopify.com/s/files/1/1151/0394/products/hoodie_large.png",
        },
        {
          id: "#E61938",
          color: "red",
          quantity: 7,
          img:
            "https://www.pngkit.com/png/full/96-964734_red-hoodie-png-hundreds-zip-up-hoodie.png",
        },
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
          id: "#E61938",
          color: "red",
          quantity: 8,
          img:
            "https://www.pngkit.com/png/full/96-964734_red-hoodie-png-hundreds-zip-up-hoodie.png",
        },
        {
          id: "#ffffff",
          color: "white",
          quantity: 6,
          img:
            "https://i.pinimg.com/originals/40/5c/47/405c4744c53d43be0e32dfe17e941696.png",
        },
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
          id: "#000000",
          color: "black",
          quantity: 7,
          img:
            "https://cdn.shopify.com/s/files/1/1151/0394/products/hoodie_large.png",
        },
        {
          id: "#E61938",
          color: "red",
          quantity: 6,
          img:
            "https://www.pngkit.com/png/full/96-964734_red-hoodie-png-hundreds-zip-up-hoodie.png",
        },
        {
          id: "#ffffff",
          color: "white",
          quantity: 5,
          img:
            "https://i.pinimg.com/originals/40/5c/47/405c4744c53d43be0e32dfe17e941696.png",
        },
        {
          id: "#4034eb",
          color: "blue",
          quantity: 4,
          img:
            "https://ramptshirts.com/assets/images/samples/standard-hoodies/royal-blue.png",
        },
        {
          id: "#f6fa00",
          color: "yellow",
          quantity: 3,
          img:
            "https://ramptshirts.com/assets/images/samples/standard-hoodies/gold.png",
        },
        {
          id: "#0b8500",
          color: "green",
          quantity: 2,
          img:
            "https://www.sportyfied.com/thumbs/regular/021031_605_basichoody_f_700x700.png",
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

//Loops through our objects and sets the
// total quantity on each size.
// getObjects(custom).forEach(
//   (el) => (el.quantity = valueObj(el.colors, "quantity"))
// );

// crew.xs.quantity = valueObj(crew.xs.colors, "quantity");
// crew.sm.quantity = valueObj(crew.sm.colors, "quantity");
// crew.md.quantity = valueObj(crew.md.colors, "quantity");
// crew.lg.quantity = valueObj(crew.lg.colors, "quantity");

export default custom;
