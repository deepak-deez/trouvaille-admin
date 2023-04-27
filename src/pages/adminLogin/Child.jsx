import React from "react";
import Router from "../../Routes";
import "./child.scss";
import LoginBanner from "../../components/adminLogin/loginBanner/Child.jsx";
import NavBar from "../../components/adminLogin/navbar/Child.jsx";
import NavBarLoginForm from "../../components/adminLogin/navbarLoginForm/Child.jsx";
import LoginForm from "../../components/adminLogin/loginForm/Child.jsx";
import Footer from "../../components/adminLogin/footer/Child.jsx";

const adminLogin = () => {
  return (
    <header className="login-page flex">
      <LoginBanner />
      <div className="signin-container flex flex-col items-center bg-white">
        <NavBar />
        <div className="flex flex-col my-auto mt-[5rem] lg:mt-[8rem] justify-center items-center">
          <LoginForm />
          <NavBarLoginForm />
        </div>
        <Footer />
      </div>
    </header>
  );
};

export default adminLogin;
