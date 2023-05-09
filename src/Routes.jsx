import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import PageError from "./component/Error/PageError";
import AmenitiesPage from "./pages/amenitiesPage";
import Tripcat from "./pages/tripcat";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/all-amenities" element={<AmenitiesPage />} />
        <Route exact path="/trip-categories" element={<Tripcat />} />
        <Route exact path="*" element={<PageError />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
