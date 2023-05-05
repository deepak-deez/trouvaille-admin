import { combineReducers } from "redux";
import { signInReducer } from "./userReducer";

const rootReducer = combineReducers({
  logInUser: signInReducer,
});

export default rootReducer;
