import { combineReducers } from "redux";
import { logInUserReducer } from "./userReducer";
import {
  addNewUserReducer,
  updateUserReducer,
  delUserReducer,
  getUserReducer,
} from "./addUserReducer";

const rootReducer = combineReducers({
  logInUser: logInUserReducer,
  addNewUser: addNewUserReducer,
  updateUser: updateUserReducer,
  delUser: delUserReducer,
  getUser: getUserReducer,
});

export default rootReducer;
