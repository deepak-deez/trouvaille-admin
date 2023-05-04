import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import PageError from "./component/Error/PageError";
import BookingList from "./pages/bookingList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="*" element={<PageError />} />
        <Route exact path="/booking-list" element={<BookingList />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
