import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/AdminLoginForm/AdminLoginForm.jsx";
import ForgotPassword from "./pages/AdminForgotPassword/AdminForgotPassword.jsx";
import ResetPassword from "./pages/AdminResetPassword/AdminResetPassword.jsx";
import Signup from "./pages/AdminSignUp/AdminSignUp.jsx"

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