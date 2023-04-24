import React from "react";
import Router from "../../Routes";
import "./signUp.scss";
import LoginBanner from "../../components/adminLogin/loginBanner/loginBanner.jsx";
import NavBarLogin from "../../components/adminLogin/navbarLogin/navbarLogin.jsx";
import NavBarLoginForm from "../../components/adminLogin/navbarLoginForm/navbarLoginForm.jsx";
import SignUp from "../../components/adminLogin/signup/Signup.jsx";
import Footer from "../../components/adminLogin/footer/footer.jsx";

const adminLogin = () => {
  return (
    <header className="signup-page flex">
      <LoginBanner />
      <div className="signin-container bg-white">
        <NavBarLogin />
        <div className="flex flex-col justify-center items-center">
          <SignUp />
          <NavBarLoginForm />
        </div>
        <Footer />
      </div>
    </header>
  );
};

export default adminLogin;
