import React from 'react'
import "./resetPassword.scss";
import eyeIcon from "../../../assets/img/singinForm/view.svg"

export default function ResetPassword() {
  return (
    <div className=" my-auto reset-password-form flex flex-col items-center justify-center">
            <div className="flex flex-col w-[300px] xl:w-[360px]">
              <h2 className="text-[34px] ">
              Reset your Password
              </h2>
              <p>Your new password must be different from previous used password.</p>
              <form action="">
                <p className="mt-[47px] text-[14px]">New Password</p>
                <div className="bg-white input-fields px-[23px] py-[15px] mt-[9px] flex flex-row items-center justify-between">
                  <input
                    className="bg-transparent"
                    type="text"
                    placeholder="Enter you email"
                  />
                  <button type="button"><img className="input-icon" src={eyeIcon} alt="mail-icon" /></button>
                </div>
                <p className="mt-[47px] text-[14px]">Confirm Password</p>
                <div className="bg-white input-fields px-[23px] py-[15px] mt-[9px] flex flex-row items-center justify-between">
                  <input
                    className="bg-transparent"
                    type="text"
                    placeholder="Enter you email"
                  />
                  <button type="button"><img className="input-icon" src={eyeIcon} alt="mail-icon" /></button>
                </div>

                <button className="mt-[27px] py-[15px] text-center reset-password-button">
                  Reset Password
                </button>
              </form>
            </div>
          </div>
  )
}
