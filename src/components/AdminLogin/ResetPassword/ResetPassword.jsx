import React, { useRef, useState } from "react";
import "./style.scss";
import axios from "axios";
import eyeIcon from "../../../assets/images/adminLogin/singinForm/view.svg";
import { useNavigate, useParams } from "react-router-dom";

const ResetPassword = () => {
  const password = useRef();
  const confirmPassword = useRef();
  const resetNewPassword = {};
  const [differentPassword, setDifferentPassword] = useState(false);
  const [emptyFieldMessage, setEmptyFieldMessage] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  return (
    <div className=" my-auto reset-password-form flex flex-col items-center justify-center">
      <div className="flex flex-col w-[300px] xl:w-[360px]">
        <h2 className="text-[34px] ">Set your New Password</h2>
        <p>Your new password must be different from previous used password.</p>
        <form action="">
          <p className="mt-[47px] text-[14px]">New Password</p>
          <div className="bg-white input-fields px-[23px] py-[15px] mt-[9px] flex flex-row items-center justify-between">
            <input
              className="bg-transparent w-[100%]"
              type="text"
              placeholder="Enter your password"
              ref={password}
            />
            <button type="button">
              <img className="input-icon" src={eyeIcon} alt="mail-icon" />
            </button>
          </div>
          <p className="mt-[47px] text-[14px]">Confirm Password</p>
          <div className="bg-white input-fields px-[23px] py-[15px] mt-[9px] flex flex-row items-center justify-between">
            <input
              className="bg-transparent w-[100%]"
              type="text"
              placeholder="confirm your password"
              ref={confirmPassword}
            />
            <button type="button">
              <img className="input-icon" src={eyeIcon} alt="mail-icon" />
            </button>
          </div>

          <p className={differentPassword ? "block" : "hidden"}>
            Password is not matching
          </p>

          <button
            className="mt-[27px] py-[15px] hover:bg-[#a92323] transition-colors duration-500 text-center reset-password-button"
            onClick={async (e) => {
              e.preventDefault();
              if (password.current.value === confirmPassword.current.value)
                setDifferentPassword(false);
              else setDifferentPassword(true);

              resetNewPassword["newPassword"] = password.current.value;
              resetNewPassword["id"] = params.id;
              resetNewPassword["token"] = params.token;
              if (password.current.value.length) {
                setEmptyFieldMessage(false);
                console.log(process.env.REACT_APP_NODE_API);
                const response = await axios.post(
                  `${process.env.REACT_APP_NODE_API}/set-password/Backend-user`,
                  resetNewPassword
                );
                console.log(response);
                if (response?.data?.success) {
                  localStorage.removeItem("password");
                  navigate("/");
                }
              } else setDifferentPassword(true);
            }
          }
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
