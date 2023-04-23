import React from "react";
import Router from "../../Routes";
import "./adminResetPassword.scss";
import LoginBanner from "../../components/adminLogin/loginBanner/loginBanner.jsx";
import NavBar from "../../components/adminLogin/navBar/navBar.jsx";
import ResetPassword from "../../components/adminLogin/resetPassword/resetPassword.jsx";
import Footer from "../../components/adminLogin/footer/footer.jsx";

const adminLogin = () => {
  return (
    <header className="login-page flex">
      <LoginBanner />
      <div className="signin-container bg-white">
        <NavBar />
        <ResetPassword />
        <Footer />
      </div>
    </header>
  );
};

export default adminLogin;
