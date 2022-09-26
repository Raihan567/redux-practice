/**
 *  1. Initialize the state (done)
 *  2. Create action type (done)
 *  3. Create Reducer (done)
 *  4. create Store and require redux (done)
 *  5. subscribe the store to the state (done)
 *  6. dispatch the action (done)
 */
const { createStore } = require("redux");
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const initialCounterState = {
  count: 0,
  users: [
    {
      name: "Raihan",
      age: 20,
    },
    {
      name: "Sumaiha Afrin",
      age: 20,
    },
  ],
};

const incrementCounter = () => {
  return {
    type: INCREMENT,
  };
};

const decrementCounter = () => {
  return {
    type: DECREMENT,
  };
};

// Create reducer
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 10,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      state;
  }
};

// create a store
const store = createStore(counterReducer);
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch the action
store.dispatch(incrementCounter());
store.dispatch(decrementCounter());
