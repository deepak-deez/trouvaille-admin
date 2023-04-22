import "./adminLoginPortal.scss";
import navLogo from "../../../assets/img/navBar/navBar.svg";
import mail from "../../../assets/img/singinForm/mail.svg"
import view from "../../../assets/img/singinForm/view.svg"

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <header className="login-page flex flex-row">
        <div className="sign-in-banner hidden lg:flex lg:flex-col lg:justify-end">
          <div className="sign-in-banner-text flex flex-col justify-end text-white ">
            <h2 className="font-[500] lg:px-[25px]  2xl:pl-[54px] 2xl:pr-[52px] 2xl:pt-[288px] lg:text-2xl xl:text-4xl ">
              Experience the world with our exceptional travel services.
            </h2>
            <p className="font-[400] lg:px-[25px] lg:pt-[10px] lg:pb-[35px] 2xl:pl-[54px] 2xl:pr-[86px] 2xl:pt-[35px] 2xl:pb-[109px] lg:text-sm xl:text-base ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </div>
        <div className="signin-container bg-white">
          <nav className="flex flex-row px-[15px] py-[10px] lg:px-[30px] lg:py-[20px] 2xl:px-[64px] 2xl:py-[27px] justify-between">
            <div className="flex flex-row gap-[10px] lg:gap-[10px] 2xl:gap-[15px]">
              <img
                className="nav-logo 2xl:w-[59.37px]"
                src={navLogo}
                alt="nav-logo"
              ></img>
              <div className="flex flex-col">
                <h2 className="trouvaille-heading text-[20px] lg:text-[25px] 2xl:text-[33.15px]">
                  trouvaille
                </h2>
                <p className="trouvaille-text text-[10px] mt-[-8px] lg:text-[10px]">
                  Front-facing Website
                </p>
              </div>
            </div>
            <div className="hidden lg:flex flex-row gap-[28px]">
              <p className="new-user-text pt-[18px]">New to here?</p>
              <button className="create-account-button px-[20px]">
                Create an account
              </button>
            </div>
          </nav>
          <div className=" xl:mt-[50px] 2xl:mt-[147px] signin-form flex flex-col items-center justify-center">
            <div className="flex flex-col w-[300px] xl:w-[360px]">
              <h2 className="text-[34px] ">
                Sign in to <br /> your Account
              </h2>
              <form action="">
                <p className="mt-[47px] text-[14px]">Email Address</p>
                <div className="bg-white input-fields px-[23px] py-[15px] mt-[9px] flex flex-row items-center justify-between">
                  <input
                    className="bg-transparent"
                    type="text"
                    placeholder="Enter you email"
                  />
                  <button type="button"><img className="input-icon" src={mail} alt="mail-icon" /></button>
                </div>
                <div className="flex flex-row mt-[26px] justify-between text-[14px] items-center">
                  <p>Password</p>
                  <span>Forgot Password?</span>
                </div>
                <div className="bg-white input-fields px-[23px] py-[15px] mt-[9px] flex flex-row items-center justify-between">
                  <input
                    className="bg-transparent"
                    type="text"
                    placeholder="Enter you password"
                  />
                  <button type="button"><img className="input-icon" src={view} alt="view-icon" /></button>

                </div>
                <p className="hidden mt-[15px]">
                  Opps! The password you entered is incorrect.
                </p>
                <div className="flex flex-row mt-[26px] text-[14px] gap-[11px]">
                  <input type="checkbox" name="remember-me" value="yes" />
                  Remember Me
                </div>
                <button className="mt-[27px] py-[15px] text-center signin-button">
                  Sign in
                </button>
                <div className="lg:hidden flex flex-row mt-[10px] gap-[28px]">
                  <p className="new-user-text text-[12px] lg:text-[14px] m-auto">
                    New to here?
                  </p>
                  <button className="create-account-button py-[10px] px-[20px]">
                    Create an account
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="2xl:h-[20vh] xl:h-[15vh] lg:h-[1vh] footer flex flex-col justify-end items-center lg:items-start">
            <footer className="">Copyright © 2023 The Trouvaille.</footer>
          </div>
        </div>
      </header>
    </>
  );
}
