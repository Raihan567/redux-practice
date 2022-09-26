// state --> count: 0
// Action --> Increment, decrement, reset
// reducer
// store

// Constant
const { createStore } = require("redux");
const ADD_USER = "ADD_USER";
// initialize the state
const initialState = {
  count: 1,
  user: ["Raihan"],
};

// Create action type
const addUser = (value) => {
  return {
    type: ADD_USER,
    payload: value,
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...state.user, action.payload],
        count: state.count + 1,
      };

    default:
      state;
  }
};

const store = createStore(userReducer);

// create a store
store.subscribe(() => {
  console.log(store.getState());
});

// dispatch the action
store.dispatch(addUser("Sumaiya"));
