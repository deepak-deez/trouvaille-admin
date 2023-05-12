import React from "react";
import Router from "../../Routes";
import "./style.scss";
import LoginBanner from "../../components/adminLogin/LogInHeader/AdminLoginBanner.jsx";
import NavBarLogin from "../../components/adminLogin/LoginNavbar/NavBarLogin.jsx";
import NavBarSigninForm from "../../components/adminLogin/NavBarLoginForm/NavBarLoginForm";
import SignUp from "../../components/adminLogin/AdminSignUp/SignUp.jsx";
import Footer from "../../components/adminLogin/FooterComponent/Footer.jsx";

const AdminSignUp = () => {
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

export default AdminSignUp;
