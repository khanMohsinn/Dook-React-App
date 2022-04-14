import * as actionTypes from "./order-types";

const INITIAL_STATE = {
  dishes: [
    {
      title: "Butter Paneer Masala",
      price: 270,
      id: 1,
    },
    {
      title: "Paneer Do Pyaza",
      price: 150,
      id: 2,
    },
    {
      title: "Malai Kofta",
      price: 140,
      id: 3,
    },
    {
      title: "Kaju Curry",
      price: 230,
      id: 4,
    },
    {
      title: "Mix Vegetable",
      price: 140,
      id: 5,
    },
    {
      title: "Veg Biryani",
      price: 180,
      id: 6,
    },
    {
      title: "Tawa Roti",
      price: 11,
      id: 7,
    },
    {
      title: "Plain Naan",
      price: 30,
      id: 8,
    },
    {
      title: "Butter Naan",
      price: 45,
      id: 9,
    },
  ],
  cart: [],
  currentItem: null,
};

const orderReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      //Get the dish data from dishes array in INITIAL STATE
      const dish = state.dishes.find((dish) => dish.id === action.payload.id);
      //check if the dish is already in the cart.
      const inCart = state.cart.find((dish) =>
        dish.id === action.payload.id ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((dish) =>
              dish.id === action.payload.id
                ? { ...dish, qty: dish.qty + 1 }
                : dish
            )
          : [...state.cart, { ...dish, qty: 1 }],
      };

    case actionTypes.REMOVE_FROM_CART:
      console.log("remove from cart case");
      // console.log(state.cart);
      // let abc = state.cart.filter((dish) => dish.id !== action.payload.id);
      console.log(action.payload, "this is payload");
      return {
        ...state,
        cart: state.cart.filter((dish) => dish.id !== action.payload.id),
      };

    case actionTypes.UPDATE_CART:
      return {
        ...state,
        cart: state.cart.map((dish) =>
          dish.id === action.payload.id
            ? { ...dish, qty: action.payload.qty }
            : dish
        ),
      };

    case actionTypes.RESET_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};

export default orderReducer;
