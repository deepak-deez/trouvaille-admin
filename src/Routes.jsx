import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import PageError from "./components/Error/PageError";

import BookingList from "./pages/bookingList";
import BookingDetails from "./pages/bookingDetails";
import CancelBooking from "./pages/cancelBooking";
import CancelNotification from "./pages/cancelNotification";

import Travel from "./pages/travel";
import OccasionPage from "./pages/occasionPage";
import AmenitiesPage from "./pages/amenitiesPage";
import Tripcat from "./pages/tripcat";
import TripListPage from "./pages/tripListPage";
import AddNewTrip from "./pages/addNewTrip";
import UpdateTrip from "./pages/UpdateTrip";
import AdminLogin from "./pages/AdminLoginForm/AdminLoginForm.jsx";
import ForgotPassword from "./pages/AdminForgotPassword/AdminForgotPassword.jsx";
import ResetPassword from "./pages/AdminResetPassword/AdminResetPassword.jsx";
import Signup from "./pages/AdminSignUp/AdminSignUp.jsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<AdminLogin />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/travel-type" element={<Travel />} />
        <Route exact path="/occasions-list" element={<OccasionPage />} />
        <Route exact path="/all-amenities" element={<AmenitiesPage />} />
        <Route exact path="/trip-categories" element={<Tripcat />} />
        <Route exact path="/list-of-trips" element={<TripListPage />} />
        <Route exact path="/trip-list/add-trip" element={<AddNewTrip />} />
        <Route exact path="/trip-list/edit-trip/:id" element={<UpdateTrip />} />
        <Route exact path="*" element={<PageError />} />
        <Route exact path="/booking-list" element={<BookingList />} />
        <Route
          exact
          path="/booking-list/booking-details/:id"
          element={<BookingDetails />}
        />
        <Route
          exact
          path="/booking-list/booking-details/:id/cancel-booking"
          element={<CancelBooking />}
        />
        <Route
          exact
          path="/booking-list/cancel-requests"
          element={<CancelNotification />}
        />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/forgotPassword" element={<ForgotPassword />} />
        <Route exact path="/resetPassword" element={<ResetPassword />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
