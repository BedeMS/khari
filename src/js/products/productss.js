import { v4 as uuidv4 } from "uuid";

class Product {
  id = uuidv4();
  sizes = {
    xs: {},
    sm: {},
    md: {},
    lg: {},
    xl: {},
  };
  totalQuantity = 0;

  constructor(name) {
    this.name = name;
  }

  _addProducts(arr) {
    // check for and get the new sizes added by user if any;
    if (arr.length === 0) return;

    // loop through and add sizes to current sizes array;
    // loop through the sizes given as an input
    arr.forEach((el) => {
      // [{size: "xl", color: "blue", quantity: 5}]
      let currentSize = this.sizes[el.size];

      // find the correct size based on input
      // xl[blue] ?
      if (!currentSize[el.color]) {
        // xl[blue] = 5
        currentSize[el.color] = el.quantity;
      } else {
        // xl[blue] += 5
        currentSize[el.color] += el.quantity;
      }

      this._calcQuantity(el.quantity);
    });

    return this.sizes;
  }

  _addImages(arr) {
    arr.forEach((img) => {
      this.images = { ...this.images, ...img };
    });
  }

  _calcQuantity(newAmount) {
    this.totalQuantity += newAmount;
  }
}

class TShirt extends Product {
  category = "T-Shirts";

  constructor(name, newSizes = []) {
    super(name);
    // newSizes should be formated as [{size: "xl", color: "blue", quantity: 5}];
    this._addProducts(newSizes);
  }
}

export { Product, TShirt };
