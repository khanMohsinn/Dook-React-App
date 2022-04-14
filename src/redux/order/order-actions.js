import * as actionTypes from "./order-types";

// export const addDishes = (itemID) => {
//   return {
//     type: actionTypes.ADD_DISHES,
//     payload: {
//       id: itemID,
//     },
//   };
// };
export const addToCart = (dish) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: dish,
  };
};
export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: itemID,
  };
};
export const updateCart = (itemID, value) => {
  return {
    type: actionTypes.UPDATE_CART,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};

export const resetCart = (state) => {
  console.log("reset cart action");
  return {
    type: actionTypes.RESET_CART,
    payload: state,
  };
};
