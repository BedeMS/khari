import { valueObj, getObjects } from "../../helpers";
import uniqid from "uniqid";

const crew = {
  name: "Crew",
  category: "T-Shirt",
  id: uniqid(),
  price: 15.0,
  xs: {
    id: "xs",
    colors: [
      {
        id: "#000000",
        color: "black",
        quantity: 5,
        img:
          "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
      },
      {
        id: "#E61938",
        color: "red",
        quantity: 5,
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
        quantity: 5,
        img:
          "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
      },
      {
        id: "#f6fa00",
        color: "yellow",
        quantity: 5,
        img:
          "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
      },
      {
        id: "#0b8500",
        color: "green",
        quantity: 5,
        img:
          "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
      },
      {
        id: "#c7c7c7",
        color: "grey",
        quantity: 5,
        img:
          "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
      },
    ],
  },
  sm: {
    id: "sm",
    colors: [
      {
        id: "#000000",
        color: "black",
        quantity: 2,
        img:
          "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
      },
      {
        id: "#E61938",
        color: "red",
        quantity: 7,
        img:
          "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
      },
      {
        id: "#ffffff",
        color: "white",
        quantity: 9,
        img:
          "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
      },
      {
        id: "#4034eb",
        color: "blue",
        quantity: 1,
        img:
          "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
      },
      {
        id: "#f6fa00",
        color: "yellow",
        quantity: 12,
        img:
          "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
      },
      {
        id: "#0b8500",
        color: "green",
        quantity: 9,
        img:
          "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
      },
      {
        id: "#c7c7c7",
        color: "grey",
        quantity: 8,
        img:
          "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
      },
    ],
  },
  md: {
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
  lg: {
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
};

//Loops through our objects and sets the
// total quantity on each size.
getObjects(crew).forEach(
  (el) => (el.quantity = valueObj(el.colors, "quantity"))
);

// crew.xs.quantity = valueObj(crew.xs.colors, "quantity");
// crew.sm.quantity = valueObj(crew.sm.colors, "quantity");
// crew.md.quantity = valueObj(crew.md.colors, "quantity");
// crew.lg.quantity = valueObj(crew.lg.colors, "quantity");

export default crew;
