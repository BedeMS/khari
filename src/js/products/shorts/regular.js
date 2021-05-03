import { valueObj, getObjects } from "../../helpers";
import uniqid from "uniqid";

const regular = {
  name: "Regular",
  category: "Short",
  img:
    "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
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
            "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
        },
        {
          id: "#E61938",
          color: "red",
          quantity: 8,
          img:
            "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
        },
        {
          id: "#ffffff",
          color: "white",
          quantity: 6,
          img:
            "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
        },
        {
          id: "#4034eb",
          color: "blue",
          quantity: 2,
          img:
            "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
        },
        {
          id: "#f6fa00",
          color: "yellow",
          quantity: 9,
          img:
            "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
        },
        {
          id: "#0b8500",
          color: "green",
          quantity: 4,
          img:
            "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
        },
        {
          id: "#c7c7c7",
          color: "grey",
          quantity: 2,
          img:
            "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
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
            "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
        },
        {
          id: "#E61938",
          color: "red",
          quantity: 6,
          img:
            "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
        },
        {
          id: "#ffffff",
          color: "white",
          quantity: 5,
          img:
            "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
        },
        {
          id: "#4034eb",
          color: "blue",
          quantity: 4,
          img:
            "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
        },
        {
          id: "#f6fa00",
          color: "yellow",
          quantity: 3,
          img:
            "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
        },
        {
          id: "#0b8500",
          color: "green",
          quantity: 2,
          img:
            "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
        },
        {
          id: "#c7c7c7",
          color: "grey",
          quantity: 1,
          img:
            "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
        },
      ],
    },
  ],
};



export default regular;
