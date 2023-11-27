import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

const inirialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  inirialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
