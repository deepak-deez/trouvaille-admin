import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import PageError from "./component/Error/PageError";
import BookingList from "./pages/bookingList";
import BookingDetails from "./pages/bookingDetails";
import CancelBooking from "./pages/cancelBooking";
import CancelNotification from "./pages/cancelNotification";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="*" element={<PageError />} />
        <Route exact path="/booking-list" element={<BookingList />} />
        <Route exact path="/booking-list/booking-details/:id" element={<BookingDetails />} />
        <Route exact path="/booking-list/booking-details/:id/cancel-booking" element={<CancelBooking />} />
        <Route exact path="/booking-list/cancel-requests" element={<CancelNotification />} />

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
