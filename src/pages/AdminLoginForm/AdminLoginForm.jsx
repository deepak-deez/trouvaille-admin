import React from "react";
import Router from "../../Routes";
import "./style.scss";
import LoginBanner from "../../components/adminLogin/LogInHeader/AdminLoginBanner.jsx";
import NavBar from "../../components/adminLogin/Navbar/Navbar.jsx";
import NavBarLoginForm from "../../components/adminLogin/NavBarLoginOptions/NavBarLoginOptions.jsx";
import LoginForm from "../../components/adminLogin/LoginForm/LoginForm.jsx";
import Footer from "../../components/adminLogin/FooterComponent/Footer.jsx";

const AdminLoginForm = () => {
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

export default AdminLoginForm;
