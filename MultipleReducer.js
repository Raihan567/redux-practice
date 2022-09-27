// Multiple Reducer

const { createStore, combineReducers } = require("redux");

// Product Constant
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

// Cart Constant
const GET_CART = "GET_CART";
const ADD_CART = "ADD_CART";

// Product states
const initializeProductState = {
  product: ["sugar", "salt"],
  numberOfProducts: 2,
};
// Cart States
const initializeCartState = {
  cart: ["sugar"],
  numberOfCart: 1,
};

// Product action type
const getProducts = () => {
  return {
    type: GET_PRODUCT,
  };
};
// Cart Action type
const getCart = () => {
  return {
    type: GET_CART,
  };
};
// payload
const addProducts = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};
const addCart = (product) => {
  return {
    type: ADD_CART,
    payload: product,
  };
};

// ProductReducer
const productReducer = (state = initializeProductState, action) => {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
      };
    case ADD_PRODUCT:
      return {
        products: [...state.product, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

const cartReducer = (state = initializeCartState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        cart: [...state.cart, action.payload],
        numberOfCart: state.numberOfCart + 1,
      };
    case GET_CART:
      return {
        ...state,
      };

    default:
      return state;
  }
};
// Root reducer
const rootReducer = combineReducers({
  productR: productReducer,
  cartR: cartReducer,
});

// Product Reducer
const store = createStore(rootReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts("pen"));

store.dispatch(getCart());
store.dispatch(addCart("pen"));
store.dispatch(addCart("pencil"));
store.dispatch(addCart("phone"));
