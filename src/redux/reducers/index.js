import { combineReducers } from "redux";
import { logInUserReducer } from "./userReducerTest";
import {userReducer} from "./userReducer";
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
import {
  getSinglePackageReducer,
  getPackageReducer,
  addPackageReducer,
  updatePackageReducer,
  deletePackageReducer,
} from "./addPackageReducers";

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
  getSinglePackage: getSinglePackageReducer,
  getPackage: getPackageReducer,
  addPackage: addPackageReducer,
  updatePackage: updatePackageReducer,
  deletePackage: deletePackageReducer,
  userLogin: userReducer
});

export default rootReducer;
