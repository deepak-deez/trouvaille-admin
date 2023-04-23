import React from 'react'
import { Outlet, Link } from "react-router-dom";
import "./forgotPassword.scss";
import mail from "../../../assets/img/singinForm/mail.svg"

export default function forgotPassword() {
  return (
    <div className=" xl:mt-[50px] 2xl:mt-[147px] forgot-password-form flex flex-col items-center justify-center">
            <div className="flex flex-col w-[300px] xl:w-[360px]">
              <h2 className="text-[34px] ">
              Set Profile Password
              </h2>
              <p>Enter the email associated with your account and we will send an email with instructions to reset your password.</p>
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
                
                <Link className="mt-[27px] py-[15px] text-center send-link-button" to="/resetPassword">Send Link</Link>
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
  )
}
