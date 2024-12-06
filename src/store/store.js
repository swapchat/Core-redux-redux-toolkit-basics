import { combineReducers, createStore } from "redux";
import counterReducer from "../reducers/counterReducer";
import profileReducer from "../reducers/profileReducer";

const store = createStore(
  combineReducers({
    counter: counterReducer,
    profile: profileReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => console.log("store", store.getState()));

export default store;
