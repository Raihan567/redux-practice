const { createStore } = require("redux");

// Constant
const ADD_PRODUCT = "ADD_PRODUCT";
const GET_PRODUCT = "GET_PRODUCT";

// initialize the state
const initializeProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

// reducer action type
const getProduct = () => {
  return {
    type: GET_PRODUCT,
  };
};
const addProduct = (product) => {
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
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      state;
  }
};

// create a store
const store = createStore(productReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch the action
store.dispatch(getProduct());
store.dispatch(addProduct("pen"));
