import { valueObj, getObjects } from "../../helpers";
import uniqid from "uniqid";

const long = {
  name: "Long",
  category: "Short",
  img:
    "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
  id: uniqid(),
  price: 15.99,
  sizes: [
    {
      id: "xs",
      colors: [
        {
          id: "#000000",
          color: "black",
          quantity: 5,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#E61938",
          color: "red",
          quantity: 5,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#ffffff",
          color: "white",
          quantity: 5,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#c7c7c7",
          color: "grey",
          quantity: 5,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
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
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#E61938",
          color: "red",
          quantity: 7,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#4034eb",
          color: "blue",
          quantity: 1,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#f6fa00",
          color: "yellow",
          quantity: 12,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        }
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
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#f6fa00",
          color: "yellow",
          quantity: 9,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#0b8500",
          color: "green",
          quantity: 4,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#c7c7c7",
          color: "grey",
          quantity: 2,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
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
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#E61938",
          color: "red",
          quantity: 6,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#ffffff",
          color: "white",
          quantity: 5,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
      ],
    },
  ],
};

//Loops through our objects and sets the
// total quantity on each size.
// getObjects(crew).forEach(
//   (el) => (el.quantity = valueObj(el.colors, "quantity"))
// );

// crew.xs.quantity = valueObj(crew.xs.colors, "quantity");
// crew.sm.quantity = valueObj(crew.sm.colors, "quantity");
// crew.md.quantity = valueObj(crew.md.colors, "quantity");
// crew.lg.quantity = valueObj(crew.lg.colors, "quantity");

export default long;
