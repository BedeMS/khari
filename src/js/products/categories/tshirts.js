import { TShirts } from "../products";

//----------------------------------------------------------------
// COMFORT HOODIES
// {Name, Price, Add Products}
export const crew = new TShirts("Crew", 14, [
  { size: "sm", color: "black", quantity: 4 },
  { size: "sm", color: "red", quantity: 4 },
  { size: "sm", color: "white", quantity: 2 },
  { size: "sm", color: "blue", quantity: 4 },
  { size: "sm", color: "yellow", quantity: 2 },
  { size: "sm", color: "green", quantity: 4 },
  { size: "md", color: "black", quantity: 4 },
  { size: "md", color: "red", quantity: 4 },
  { size: "md", color: "white", quantity: 2 },
  { size: "md", color: "blue", quantity: 4 },
  { size: "md", color: "yellow", quantity: 2 },
  { size: "md", color: "green", quantity: 4 },
  { size: "lg", color: "black", quantity: 6 },
  { size: "lg", color: "red", quantity: 3 },
  { size: "lg", color: "white", quantity: 4 },
  { size: "lg", color: "grey", quantity: 6 },
  { size: "lg", color: "green", quantity: 3 },
  { size: "xl", color: "red", quantity: 3 },
  { size: "xl", color: "white", quantity: 4 },
  { size: "xl", color: "grey", quantity: 6 },
  { size: "xl", color: "green", quantity: 3 },
]);

crew._addImages([
  {
    black:
      "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
    red:
      "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
    white:
      "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
    blue:
      "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
    yellow:
      "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
    green:
      "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
    grey:
      "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
  },
]);

//----------------------------------------
// GRAPHIC

export const vNeck = new TShirts("V-Neck", 12, [
  { size: "sm", color: "black", quantity: 4 },
  { size: "sm", color: "red", quantity: 4 },
  { size: "sm", color: "white", quantity: 2 },
  { size: "sm", color: "blue", quantity: 4 },
  { size: "md", color: "red", quantity: 4 },
  { size: "md", color: "white", quantity: 2 },
  { size: "md", color: "blue", quantity: 4 },
  { size: "md", color: "yellow", quantity: 2 },
  { size: "md", color: "green", quantity: 4 },
  { size: "lg", color: "black", quantity: 6 },
  { size: "lg", color: "red", quantity: 3 },
  { size: "lg", color: "white", quantity: 4 },
  { size: "lg", color: "grey", quantity: 6 },
  { size: "xl", color: "white", quantity: 4 },
  { size: "xl", color: "grey", quantity: 6 },
  { size: "xl", color: "green", quantity: 3 },
]);

vNeck._addImages([
  {
    black:
      "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
    red:
      "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
    white:
      "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
    blue:
      "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
    yellow:
      "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
    green:
      "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
    grey:
      "https://i.pinimg.com/originals/4e/be/50/4ebe50e2495b17a79c31e48a0e54883f.png",
  },
]);

export default [crew, vNeck];
