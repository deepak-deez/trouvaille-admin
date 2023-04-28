import React from "react";
import Router from "../../Routes";
import "./child.scss";
import LoginBanner from "../../components/adminLogin/loginBanner/Child.jsx";
import NavBarLogin from "../../components/adminLogin/navbarLogin/Child.jsx";
import NavBarSigninForm from "../../components/adminLogin/navbarSigninForm/Child";
import SignUp from "../../components/adminLogin/signup/Child.jsx";
import Footer from "../../components/adminLogin/footer/Child.jsx";

const adminLogin = () => {
  return (
    <header className="signup-page flex">
      <LoginBanner />
      <div className="signin-container flex flex-col bg-white">
        <NavBarLogin />
        <div className="flex flex-col my-auto mt-[5rem] lg:mt-[8rem] justify-center items-center">
          <SignUp />
          <NavBarSigninForm />
        </div>
        <Footer />
      </div>
    </header>
  );
};

export default adminLogin;
