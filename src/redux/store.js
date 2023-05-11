import { applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

const initalState = {
  users: {
    userDetails: JSON.parse(localStorage.getItem("userDetails")),
  },
};

const middleware = [thunk];

const store = configureStore(
  rootReducer,
  initalState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
