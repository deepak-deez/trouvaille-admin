import React from "react";
import "./style.scss";
import { Outlet, Link } from "react-router-dom";
import navLogo from "../../../assets/images/adminLogin/navBar/navBar.svg";

export default function Navbar() {
  return (
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
        <Link
          className="create-account-button py-[9px] m-auto px-[20px]"
          to="/signup"
        >
          Create an account
        </Link>
      </div>
    </nav>
  );
}
