import React from "react";
import Router from "../../Routes";
import "./style.scss";
import LoginBanner from "../../components/adminLogin/LogInHeader/AdminLoginBanner.jsx";
import NavBarLogin from "../../components/adminLogin/LoginNavbar/NavBarLogin.jsx";
import NavBarSigninForm from "../../components/adminLogin/NavBarLoginForm/NavBarLoginForm";
import ForgotPassword from "../../components/adminLogin/ForgotPassword/ForgotPassword.jsx";
import Footer from "../../components/adminLogin/FooterComponent/Footer.jsx";

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
