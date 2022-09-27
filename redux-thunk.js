/**
 *  1. async actions - api calling
 *  2. api url - https://jsonplaceholder.typicode.com/todos
 *  3. Middleware - redux-thunk
 *  4. axios api
 */

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const thunk = require("redux-thunk").default;

// constant
const GET_TODO_REQUEST = "GET_TODO_REQUEST";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAILED = "GET_TODO_FAILED";
const API_URL = `https://jsonplaceholder.typicode.com/todos`;
// States
const initializeTodos = {
  todos: [],
  isLoading: false,
  error: null,
};
// Actions
const todoRequest = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};
const todoSuccess = (todos) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: todos,
  };
};
const todoFailed = (error) => {
  return {
    type: GET_TODO_FAILED,
    payload: error,
  };
};
// Reducers
const todoReducer = (state = initializeTodos, action) => {
  switch (action.type) {
    case GET_TODO_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_TODO_SUCCESS:
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    case GET_TODO_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
// Async action creator
const fetchData = () => {
  return (dispatch) => {
    dispatch(todoRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map((todo) => todo.completed);
        dispatch(todoSuccess(titles));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(todoFailed(error));
      });
  };
};

// store
const store = createStore(todoReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
