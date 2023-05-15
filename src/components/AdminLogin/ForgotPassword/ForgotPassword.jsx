import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./style.scss";
import mail from "../../../assets/images/adminLogin/singinForm/mail.svg";
import { logDOM } from "@testing-library/react";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = process.env.REACT_APP_API;

export default function ForgotPassword() {

  const userType = localStorage.getItem("userType")
  const emailRef = useRef();
  const navigate = useNavigate()
  const handleClick = async() => {
    console.log(emailRef.current.value);
    const body = {
      email: emailRef.current.value
    }
    const config = { "Content-type": "application/json" };
    const response  = await axios.post(`${URL}send-reset-mail/Backend-user`, body, config);
    console.log(response);
    if(response?.success)
    navigate("/resetPassword")
    else
    alert(response.data.message)
  }

  return (
    <div className=" my-auto forgot-password-form flex flex-col items-center justify-center">
      <div className="flex flex-col w-[300px] xl:w-[360px]">
        <h2 className="text-[34px] ">Set Profile Password</h2>
        <p>
          Enter the email associated with your account and we will send an email
          with instructions to reset your password.
        </p>
        <form action="">
          <p className="mt-[47px] text-[14px]">Email Address</p>
          <div className="bg-white input-fields px-[23px] py-[15px] mt-[9px] flex flex-row items-center justify-between">
            <input
              className="bg-transparent"
              type="text"
              placeholder="Enter you email"
              ref={emailRef}
            />
            <button type="button">
              <img className="input-icon" src={mail} alt="mail-icon" />
            </button>
          </div>

          <Link
            className="mt-[27px] py-[15px] text-center send-link-button"
            onClick={handleClick}
          >
            Send Link
          </Link>
        </form>
      </div>
    </div>
  );
}
