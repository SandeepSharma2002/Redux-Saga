import {SET_PRODUCT_DATA} from "./constant";

export const productData = (data = [],action) => {
  switch (action.type) {
      case SET_PRODUCT_DATA:
      return [...action.data];

    default:
      return data;
  }
};
