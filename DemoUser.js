const { createStore } = require("redux");

const ADD_USER = "ADD_USER";

const initializeUser = {
  count: 1,
  user: ["Raihan"],
};

const addUser = (value) => {
  return {
    type: ADD_USER,
    payload: value,
  };
};

const addUserReducer = (state = initializeUser, action) => {
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
const store = createStore(addUserReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addUser("Sumaiya"));
