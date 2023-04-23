import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./loginForm.scss";
import mail from "../../../assets/img/singinForm/mail.svg";
import view from "../../../assets/img/singinForm/view.svg";

export default function loginForm() {
  return (
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
            <button type="button">
              <img className="input-icon" src={mail} alt="mail-icon" />
            </button>
          </div>
          <div className="flex flex-row mt-[26px] justify-between text-[14px] items-center">
            <p>Password</p>
            <Link className="text-[#727A86]" to="/forgotPassword">
              Forgot Password?
            </Link>
          </div>
          <div className="bg-white input-fields px-[23px] py-[15px] mt-[9px] flex flex-row items-center justify-between">
            <input
              className="bg-transparent"
              type="text"
              placeholder="Enter you password"
            />
            <button type="button">
              <img className="input-icon" src={view} alt="view-icon" />
            </button>
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
  );
}
