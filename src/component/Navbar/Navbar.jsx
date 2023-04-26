import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import userIcon from "../../assets/image/navbar/user-icon.png";

const Navbar = ({heading}) => {
  return (
    <div className="flex justify-between items-center bg-[#dbe6f5] col-span-10 p-5">
      <h2 className="font-bold ">{heading}</h2>
      <div className="flex md:flex-row flex-col-reverse justify-center items-center md:space-x-3">
        <MdNotificationsNone />
        <img className="w-[25px]" src={userIcon} alt="usericon" />
        <h3>Hi, Morris</h3>
      </div>
    </div>
  );
};

export default Navbar;
