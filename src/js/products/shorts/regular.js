import { valueObj, getObjects } from "../../helpers";
import uniqid from "uniqid";

const regular = {
  name: "Regular",
  category: "Short",
  img:
    "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
  id: uniqid(),
  price: 12.99,
  sizes: [
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
          id: "#E61938",
          color: "red",
          quantity: 8,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#ffffff",
          color: "white",
          quantity: 6,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#4034eb",
          color: "blue",
          quantity: 2,
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
        {
          id: "#4034eb",
          color: "blue",
          quantity: 4,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#f6fa00",
          color: "yellow",
          quantity: 3,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#0b8500",
          color: "green",
          quantity: 2,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
        {
          id: "#c7c7c7",
          color: "grey",
          quantity: 1,
          img:
            "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
        },
      ],
    },
  ],
};



export default regular;
