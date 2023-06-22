import React, { useEffect, useState, useRef } from "react";
import { MdNotificationsNone } from "react-icons/md";
import userIcon from "../../assets/images/navbar/user.svg";
import { useNavigate } from "react-router-dom";
import store from "../../redux/store";
import ProfilePop from "../ProfilePop/ProfilePop";
import { useSelector } from "react-redux";
import LoadingScreen from "../Loading/LoadingScreen";
import NotificationPop from "../NotificationPop/NotificationPop";
import socketIOClient from "socket.io-client";
import axios from "axios";

const Navbar = ({ heading }) => {
  const [profilePop, setProfilePop] = useState(false);
  const [notificationPopup, setNotificationPopup] = useState(false);

  const { userDetails } = useSelector((state) => state.userLogin);
  const userName = userDetails?.data?.userDetails.userName;
  const navigate = useNavigate();
  const refProfile = useRef(null);
  const refNotification = useRef(null);

  const socket = socketIOClient(process.env.REACT_APP_NODE_API);

  const [tripUpdatesNotis, setTripUpdatesNotis] = useState();

  useEffect(() => {
    if (!tripUpdatesNotis) {
      getBookingNotis();
    }
    socket.on("getCurrentBooking", (data) => {
      setTripUpdatesNotis(data);
    });

    console.log(tripUpdatesNotis?.data);
  }, [socket]);

  const getBookingNotis = async () => {
    const bookingNotisUrl = `${process.env.REACT_APP_NODE_API}/get-booking-notifications/Frontend-user`;
    try {
      const response = await axios.get(bookingNotisUrl);
      setTripUpdatesNotis(response?.data);
      console.log(tripUpdatesNotis?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    document.addEventListener("click", hideOnClickOutsideProfile, true);
    document.addEventListener("click", hideOnClickOutsideNotification, true);
  }, []);

  const hideOnClickOutsideProfile = (e) => {
    if (refProfile.current && !refProfile.current.contains(e.target)) {
      setProfilePop(false);
    }
  };

  const hideOnClickOutsideNotification = (e) => {
    if (
      refNotification.current &&
      !refNotification.current.contains(e.target)
    ) {
      setNotificationPopup(false);
    }
  };

  return (
    <div className="flex justify-between sticky py-5 top-0 w-full z-50 items-center bg-[#dbe6f5] xl:m-0 col-span-10 p-5">
      <h2 className="font-bold ml-10 ">{heading}</h2>
      <div className="flex justify-center items-center px-5 space-x-2 ">
        <div ref={refNotification} className="realtive">
          <MdNotificationsNone
            className="hover: cursor-pointer w-6 h-6"
            onClick={() => {
              setNotificationPopup(!notificationPopup);
            }}
          />
          <p className="absolute top-3 right-[9.2rem] w-6 h-6 tex-xs bg-green-600 text-white text-xs text-center pt-1 rounded-full">
            {tripUpdatesNotis?.data.length}
          </p>
          {notificationPopup && (
            <NotificationPop
              setNotificationPopup={setNotificationPopup}
              notificationPopup={notificationPopup}
              tripUpdatesNotis={tripUpdatesNotis?.data}
            />
          )}
        </div>

        <div
          ref={refProfile}
          className="relative flex items-center justify-center"
        >
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
