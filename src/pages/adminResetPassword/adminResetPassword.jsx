import React from "react";
import Router from "../../Routes";
import "./adminResetPassword.scss";
import LoginBanner from "../../components/adminLogin/loginBanner/loginBanner.jsx";
import NavBarLogin from "../../components/adminLogin/navbarLogin/navbarLogin.jsx"
import NavBarLoginForm from "../../components/adminLogin/navbarLoginForm/navbarLoginForm.jsx";
import ResetPassword from "../../components/adminLogin/resetPassword/resetPassword.jsx";
import Footer from "../../components/adminLogin/footer/footer.jsx";

const adminLogin = () => {
  return (
    <header className="login-page flex">
      <LoginBanner />
      <div className="signin-container flex flex-col bg-white">
        <NavBarLogin />
        <div className="flex flex-col my-auto mt-[5rem] lg:mt-[8rem] justify-center items-center">
          <ResetPassword />
          <NavBarLoginForm />
        </div>
        <Footer />
      </div>
    </header>
  );
};

export default adminLogin;
