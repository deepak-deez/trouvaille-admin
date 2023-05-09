import { combineReducers } from "redux";
import { logInUserReducer } from "./userReducer";
import {
  addNewUserReducer,
  updateUserReducer,
  delUserReducer,
  getUserReducer,
} from "./addUserReducer";
import {
  addNewTipReducer,
  updateTripReducer,
  deleteTripReducer,
  getTripReducer,
} from "./addTripReducer";

const rootReducer = combineReducers({
  logInUser: logInUserReducer,
  addNewUser: addNewUserReducer,
  updateUser: updateUserReducer,
  delUser: delUserReducer,
  getUser: getUserReducer,
  addNewTip: addNewTipReducer,
  updateTrip: updateTripReducer,
  deleteTrip: deleteTripReducer,
  getTrip: getTripReducer,
});

export default rootReducer;
