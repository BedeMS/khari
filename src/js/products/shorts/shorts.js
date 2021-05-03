import uniqid from "uniqid";
import long from "./long";
import regular from "./regular"; 

export default {
  name: "Shorts", 
  id: uniqid(),
  img: "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
  selections: [long, regular],
};
