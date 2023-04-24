import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/adminLogin/adminLogin.jsx";
import ForgotPassword from "./pages/adminForgotPassword/adminForgotPassword.jsx";
import ResetPassword from "./pages/adminResetPassword/adminResetPassword.jsx";
import Signup from "./pages/signUp/signUp.jsx"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<AdminLogin/>} exact />
                    <Route path="/signup"  element={<Signup/>} />
                    <Route path="/forgotPassword"  element={<ForgotPassword/>} />
                    <Route path="/resetPassword"  element={<ResetPassword/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;