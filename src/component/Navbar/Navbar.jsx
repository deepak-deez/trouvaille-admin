import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import userIcon from "../../assets/images/navbar/user-icon.png";

const Navbar = ({ heading, userName }) => {
  return (
    <div className="flex justify-between items-center bg-[#dbe6f5] ml-10 xl:m-0 col-span-10 p-5">
      <h2 className="font-bold ">{heading}</h2>
      <div className="flex justify-center items-center px-5 space-x-2">
        <MdNotificationsNone />
        <img className="w-[25px]" src={userIcon} alt="usericon" />
        <h3>{"hi " + userName}</h3>
      </div>
    </div>
  );
};

export default Navbar;
