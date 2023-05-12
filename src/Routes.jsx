import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/adminLogin/Child.jsx";
import ForgotPassword from "./pages/adminForgotPassword/Child.jsx";
import ResetPassword from "./pages/adminResetPassword/Child.jsx";
import Signup from "./pages/signUp/Child.jsx"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<AdminLogin/>} exact />
                    <Route path="/signup"  element={<Signup/>} />
                    <Route path="/forgotPassword"  element={<ForgotPassword/>} />
                    <Route path="/resetPassword"  element={<ResetPassword/>} />
                    <Route path="/dashboard"/>

            </Routes>
        </BrowserRouter>
    );
}

export default Router;