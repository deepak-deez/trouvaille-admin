import React, { useRef, useEffect, useState } from "react";
import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import "./style.scss";
import mail from "../../../assets/images/adminLogin/singinForm/mail.svg";
import view from "../../../assets/images/adminLogin/singinForm/view.svg";
import Cookies from "js-cookie";
import Handle from "rc-slider/lib/Handles/Handle";
import { getUsers } from "../../../redux/actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import store from "../../../redux/store.js";

export default function LoginForm() {
  const navigate = useNavigate();
  const details = {};
  const emailRef = useRef();
  const passwordRef = useRef();
  const [showPassword, setshowPassword] = useState(false);
  const [apiMessage, setapiMessage] = useState("");
  const [emptyFieldMessage, setemptyFeildMessage] = useState(false);
  const { userDetails, error } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();
  const [checked, setchecked] = useState(
    localStorage.getItem("rememberMe") === "true" ? true : false
  );

  console.log(store.getState());
  useEffect(() => {
    if (userDetails?.success) {
      handleRemember(userDetails);
      navigate("/dashboard");
    }
  }, [userDetails]);

  useEffect(() => {
    if (error) {
      console.log(error);
      setapiMessage(error.message);
    }
  }, [error]);

  const handleRemember = (userDetails) => {
    if (checked) {
      localStorage.setItem("email", emailRef.current.value);
      localStorage.setItem("password", passwordRef.current.value);
      localStorage.setItem("token", userDetails.data.token);
      localStorage.setItem("userType", userDetails.data.userDetails.userType);
      localStorage.setItem("rememberMe", checked);
    } else {
      localStorage.removeItem("email", emailRef.current.value);
      localStorage.removeItem("password", passwordRef.current.value);
      localStorage.removeItem("token", userDetails.data.token);
      localStorage.removeItem(
        "userType",
        userDetails.data.userDetails.userType
      );

      localStorage.setItem("rememberMe", checked);
    }
    Cookies.set("TOKEN", userDetails.data.token, { expires: 7 });
  };

  const signInHandler = async () => {
    details["email"] = emailRef.current.value;
    details["password"] = passwordRef.current.value;
    if (!!emailRef.current.value.length && !!passwordRef.current.value) {
      setemptyFeildMessage(false);
      dispatch(getUsers(emailRef.current.value, passwordRef.current.value));
    } else {
      setemptyFeildMessage(true);
    }
  };

  return (
    <div className=" signin-form flex flex-col items-center justify-center">
      <div className="flex flex-col w-[300px] xl:w-[360px]">
        <h2 className="text-[34px] ">
          Sign in to <br /> your Account
        </h2>
        <form>
          <p className="mt-[47px] text-[14px]">Email Address</p>
          <div className="bg-white input-fields px-[23px]  mt-[9px] flex flex-row items-center justify-between">
            <input
              className="bg-transparent w-[100%] py-[15px] outline-none"
              type="text"
              placeholder="Enter you email"
              ref={emailRef}
              defaultValue={
                localStorage.getItem("email")
                  ? localStorage.getItem("email")
                  : ""
              }
            />
            <button type="button">
              <img className="input-icon" src={mail} alt="mail-icon" />
            </button>
          </div>
          <div className="flex flex-row mt-[26px] justify-between text-[14px] items-center">
            <p>Password</p>
            <Link className="text-[#727A86]" to="/forgot-password">
              Forgot Password?
            </Link>
          </div>
          <div className="bg-white input-fields px-[23px] mt-[9px] flex flex-row items-center justify-between">
            <input
              className="bg-transparent w-[100%] py-[15px] outline-none"
              type={showPassword ? "text" : "password"}
              placeholder="Enter you password"
              ref={passwordRef}
              defaultValue={
                localStorage.getItem("password")
                  ? localStorage.getItem("password")
                  : ""
              }
            />
            <button
              type="button"
              onClick={() => {
                setshowPassword(!showPassword);
              }}
            >
              <img className="input-icon" src={view} alt="view-icon" />
            </button>
          </div>
          <p className="hidden mt-[15px]">
            Opps! The password you entered is incorrect.
          </p>
          <div className="flex flex-row mt-[26px] text-[14px] gap-[11px]">
            <input
              type="checkbox"
              name="remember-me"
              value="yes"
              defaultChecked={checked}
              onChange={() => {
                setchecked(!checked);
              }}
            />
            Remember Me
          </div>
          <button
            className="mt-[27px] py-[15px] hover:bg-[#a92323] transition-colors duration-500 text-center signin-button"
            onClick={(e) => {
              e.preventDefault();

              signInHandler();
            }}
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
