// Multiple Reducer

const { createStore } = require("redux");

// Product Constant
const GET_PRODUCT = "GET_PRODUCT";
const ADD_PRODUCT = "ADD_PRODUCT";

// ProductReducer
const initializeProductState = {
  product: ["sugar", "salt"],
  numberOfProducts: 2,
};

// Action type
const getProducts = () => {
  return {
    type: GET_PRODUCT,
  };
};

const addProducts = (product) => {
  return {
    type: ADD_PRODUCT,
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
      state;
  }
};
// CartReducer
const store = createStore(productReducer);
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProducts());
store.dispatch(addProducts("pen"));
