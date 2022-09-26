// state --> count: 0
// Action --> Increment, decrement, reset
// reducer
// store

// Constant
const { createStore } = require("redux");
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";
const INCREMENT_BY_VALUE = "INCREMENT_BY_VALUE";
// initialize the state
const initialState = {
  count: 0,
};

// Create action type
const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
const resetAction = () => {
  return {
    type: RESET,
  };
};
const incrementCounterByValue = (value) => {
  return {
    type: INCREMENT_BY_VALUE,
    payload: value,
  };
};

const counterReducerAction = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 3,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 2,
      };
    case RESET:
      return {
        ...state,
        count: 0,
      };
    case INCREMENT_BY_VALUE:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      state;
  }
};

const store = createStore(counterReducerAction);

// create a store
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch the action
store.dispatch(incrementAction());
store.dispatch(decrementAction());
store.dispatch(resetAction());
store.dispatch(incrementCounterByValue(5));
store.dispatch(incrementCounterByValue(15));
