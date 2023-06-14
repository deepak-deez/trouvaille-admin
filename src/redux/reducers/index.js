import { combineReducers } from "redux";
import { logInUserReducer } from "./userReducerTest";
import { userReducer } from "./userReducer";
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
  getAllTypeReducer,
} from "./addTripReducer";
import {
  getSinglePackageReducer,
  getPackageReducer,
  addPackageReducer,
  updatePackageReducer,
  deletePackageReducer,
} from "./addPackageReducers";

import {
  getBookingReducer,
  getSingleBookingReducer,
  updateBookingReducer,
  deleteBookingReducer,
  getNotificationReducer,
} from "./bookingReducer";

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
  userLogin: userReducer,
  getNotification: getNotificationReducer,
  getBooking: getBookingReducer,
  getSingleBooking: getSingleBookingReducer,
  updateBooking: updateBookingReducer,
  deleteBooking: deleteBookingReducer,
  getAllType: getAllTypeReducer,
});

export default rootReducer;
