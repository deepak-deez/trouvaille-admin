import React, { useEffect, useState, useRef } from "react";
import { MdNotificationsNone } from "react-icons/md";
import userIcon from "../../assets/images/navbar/user-icon.png";
import { useNavigate } from "react-router-dom";
import store from "../../redux/store";
import ProfilePop from "../ProfilePop/ProfilePop";
import { useSelector } from "react-redux";
import LoadingScreen from "../Loading/LoadingScreen";

const Navbar = ({ heading }) => {
  const [profilePop, setProfilePop] = useState(false);

  const { userDetails, loading } = useSelector((state) => state.userLogin);

  // console.log(
  //   "asdsadadas" + JSON.stringify(userDetails?.data?.userDetails.userName)
  // );

  const userName = userDetails?.data?.userDetails.userName;

  // useEffect(() => {
  // userName.current = userDetails?.userDetails?.userName;
  // setUserName(userDetails?.userDetails?.userName);
  // }, [userDetails]);

  // let storeData = "";
  // if (userDetails) storeData = initialState?.data?.userDetails?.userName;
  // else storeData = userDetails?.userDetails?.userName;
  // // console.log(storeData);

  // useEffect(() => {
  //   if (storeData?.userLogin?.userDetails?.userDetails?.userName) {
  //     console.log(storeData?.userLogin?.userDetails?.userDetails?.userName);
  //     setUserName(storeData?.userLogin?.userDetails?.userDetails?.userName);
  //   }
  // }, [userDetails]);
  const navigate = useNavigate();
  // useEffect(() => {
  //   console.log(profilePop, "navbar");
  // }, [profilePop]);

  // if (loading)
  return (
    <div className="flex justify-between w-full z-50 items-center bg-[#dbe6f5] xl:m-0 col-span-10 p-5">
      <h2 className="font-bold ml-10 ">{heading}</h2>
      <div className="flex justify-center items-center px-5 space-x-2 ">
        <MdNotificationsNone
          className="hover: cursor-pointer"
          onClick={() => {
            navigate("/cancel-requests");
          }}
        />
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
