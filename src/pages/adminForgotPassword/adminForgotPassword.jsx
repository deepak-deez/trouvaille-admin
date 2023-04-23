import React from "react";
import Router from "../../Routes";
import "./adminForgotPassword.scss";
import LoginBanner from "../../components/adminLogin/loginBanner/loginBanner.jsx";
import NavBar from "../../components/adminLogin/navBar/navBar.jsx";
import ForgotPassword from "../../components/adminLogin/forgotPassword/forgotPassword.jsx";
import Footer from "../../components/adminLogin/footer/footer.jsx";

const adminLogin = () => {
  return (
    <header className="login-page flex">
      <LoginBanner />
      <div className="signin-container bg-white">
        <NavBar />
        <ForgotPassword />
        <Footer />
      </div>
    </header>
  );
};

export default adminLogin;
