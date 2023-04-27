import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import PageError from "./component/Error/PageError";


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/dashboard" Component={Dashboard} />
        <Route exact path="*" Component={PageError} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
