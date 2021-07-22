import uniqid from "uniqid";
import long from "./long";
import regular from "./regular"; 

export default {
  name: "Shorts", 
  id: uniqid(),
  img: "https://www.runningxpert.com/media/catalog/product/cache/1/image/575x/9df78eab33525d08d6e5fb8d27136e95/g/r/graphic-woven-7-men_s-running-shorts_1_.png",
  selections: [long, regular],
};
