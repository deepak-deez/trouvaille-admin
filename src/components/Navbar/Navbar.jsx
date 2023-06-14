import React, { useEffect, useState, useRef } from "react";
import { MdNotificationsNone } from "react-icons/md";
import userIcon from "../../assets/images/navbar/user-icon.png";
import { useNavigate } from "react-router-dom";
import store from "../../redux/store";
import ProfilePop from "../ProfilePop/ProfilePop";
import { useSelector } from "react-redux";
import LoadingScreen from "../Loading/LoadingScreen";
import NotificationPop from "../NotificationPop/NotificationPop";

const Navbar = ({ heading }) => {
  const [profilePop, setProfilePop] = useState(false);
  const [notificationPopup, setNotificationPopup] = useState(false);

  const { userDetails } = useSelector((state) => state.userLogin);
  const userName = userDetails?.data?.userDetails.userName;
  const navigate = useNavigate();
  return (
    <div className="flex justify-between sticky py-5 top-0 w-full z-50 items-center bg-[#dbe6f5] xl:m-0 col-span-10 p-5">
      <h2 className="font-bold ml-10 ">{heading}</h2>
      <div className="flex justify-center items-center px-5 space-x-2 ">
        <div className="realtive">
          <MdNotificationsNone
            className="hover: cursor-pointer "
            onClick={() => {
              setNotificationPopup(!notificationPopup);
            }}
          />

          {notificationPopup && (
            <NotificationPop
              setNotificationPopup={setNotificationPopup}
              notificationPopup={notificationPopup}
            />
          )}
        </div>

        <div className="relative flex items-center justify-center">
          <img
            onClick={() => {
              setProfilePop(!profilePop);
            }}
            className="w-[25px]"
            src={userIcon}
            alt="usericon"
          />
          {profilePop && (
            <ProfilePop setProfilePop={setProfilePop} profilePop={profilePop} />
          )}
          <h3 className="hidden sm:block">Hi, {userName}</h3>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
