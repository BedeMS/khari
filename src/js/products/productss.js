import { v4 as uuidv4 } from "uuid";

class Product {
  constructor(name) {
    this.name = name;
  }

//   _addSizes(){
//     // check for and get the new sizes added by user if any;
//     if(this.newSizes.length === 0) return;
//     // loop through and add sizes to current sizes array;
//     // this.newSizes
//   }
}

class TShirt extends Product {
  category = "T-Shirts";
  id = uuidv4();
  sizes = [
    { id: "xs", colors: [] },
    { id: "sm", colors: [] },
    { id: "md", colors: [] },
    { id: "lg", colors: [] },
    { id: "xl", colors: [] },
  ];

  constructor(name) {
    super(name, newSizes);
    this.newSizes = newSizes;
    // this._addSizes();
  }

}
