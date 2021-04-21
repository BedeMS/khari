import uniqid from "uniqid";
import crew from "./crew";
import vNeck from "./vNeck";
export default {
  name: "T-shirts",
  id: uniqid(),
  img: "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
  selections: [crew, vNeck],
};
