import products from "./products/finalProducts";

export const state = {};

export const getCategories = (gender) => {
  let categories = [];

  for (let property in products) {
    let category = {
      title: products[property][0].category,
      image: products[property][0].categoryImage,
    };
    categories.push(category);
  }

  return categories;
};
