import React from "react";
import { MdNotificationsNone } from "react-icons/md";
import userIcon from "../../assets/images/navbar/user-icon.png";
import { useNavigate } from "react-router-dom";

const Navbar = ({ heading, userName }) => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between items-center bg-[#dbe6f5] ml-10 xl:m-0 col-span-10 p-5">
      <h2 className="font-bold ">{heading}</h2>
      <div className="flex justify-center items-center px-5 space-x-2">
        <MdNotificationsNone
          className="hover: cursor-pointer"
          onClick={() => {
            navigate("/cancel-requests");
          }}
        />
        <img className="w-[25px]" src={userIcon} alt="usericon" />
        <h3>{"hi " + userName}</h3>
      </div>
    </div>
  );
};

export default Navbar;
