import React from "react";
import Router from "../../Routes";
import "./style.scss";
import LoginBanner from "../../component/AdminLogin/LogInHeader/AdminLoginBanner.jsx";
import NavBarLogin from "../../component/AdminLogin/LoginNavbar/NavBarLogin.jsx";
import NavBarSigninForm from "../../component/AdminLogin/NavBarLoginForm/NavBarLoginForm";
import ForgotPassword from "../../component/AdminLogin/ForgotPassword/ForgotPassword.jsx";
import Footer from "../../component/AdminLogin/FooterComponent/Footer.jsx";

const AdminForgotPassword = () => {
  return (
    <header className="login-page flex">
      <LoginBanner />
      <div className="signin-container flex flex-col items-center bg-white">
        <NavBarLogin />
        <div className="flex flex-col my-auto mt-[5rem] lg:mt-[8rem] justify-center items-center">
          <ForgotPassword />
          <NavBarSigninForm />
        </div>
        <Footer />
      </div>
    </header>
  );
};

// tests

export default AdminForgotPassword;
