import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import PageError from "./component/Error/PageError";
import TripListPage from "./pages/tripListPage";
import AddNewTrip from "./pages/addNewTrip";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/list-of-trips" element={<TripListPage />} />
        <Route exact path="/trip-list/add-trip" element={<AddNewTrip />} />
        <Route exact path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
