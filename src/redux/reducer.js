import { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // console.log(data);
      return [action.data, ...data];

    case REMOVE_FROM_CART:
      // let newData = data.slice(0,-1)
      const newData = data.filter((item)=>item.id!==action.data)
      console.log("remaining", newData);
      return [...newData];

    case EMPTY_CART:
      data = [];
      return [...data];

    default:
      return data;
  }
};
