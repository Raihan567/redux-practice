/**
 *  async action --> api calling
 *  api url --> https://jsonplaceholder.typicode.com/todos
 *  Middleware - redux- thunk
 *  axios api
 */

const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");

// Constant
const GET_TODO_REQUEST = "GET_TODO_REQUEST";
const GET_TODO_SUCCESS = "GET_TODO_SUCCESS";
const GET_TODO_FAILED = "GET_TODO_FAILED";
const API_URL = "https://jsonplaceholder.typicode.com/todo";

// states
const initialTodos = {
  todos: [],
  isLoading: false,
  error: null,
};
// Actions
const getTodoRequest = () => {
  return {
    type: GET_TODO_REQUEST,
  };
};
const getTodoSuccess = (todos) => {
  return {
    type: GET_TODO_SUCCESS,
    payload: todos,
  };
};
const getTodoFailed = (error) => {
  return {
    type: GET_TODO_FAILED,
    payload: error,
  };
};

// Reducers
const todoReducer = (state = initialTodos, action) => {
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
    dispatch(getTodoRequest());
    axios
      .get(API_URL)
      .then((res) => {
        const todos = res.data;
        const titles = todos.map((todo) => todo.title);
        dispatch(getTodoSuccess(titles));
      })
      .catch((err) => {
        const error = err.message;
        dispatch(getTodoFailed(error));
      });
  };
};

// store
const store = createStore(todoReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchData());
