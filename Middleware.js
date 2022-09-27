// Redux logger

const { createStore, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

// Product Constant
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

// Product states
const initializeProductState = {
  product: ["sugar", "salt"],
  numberOfProducts: 2,
};

// Product action type
const getProducts = () => {
  return {
    type: GET_PRODUCT,
  };
};

// payload
const addProducts = (product) => {
  return {
    type: ADD_PRODUCT,
    payload: product,
  };
};

// Product Reducer
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

// Product Reducer
const store = createStore(productReducer, applyMiddleware(logger));
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts("pen"));
