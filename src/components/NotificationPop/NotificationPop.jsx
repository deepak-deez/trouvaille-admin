import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getNotification } from "../../redux/actions/bookingActions";
import { useDispatch, useSelector } from "react-redux";
import Miniloader from "../MiniLoader/Miniloader";
import "./style.scss";

const NotificationPop = ({
  setNotificationPopup,
  notificationPopup,
  tripUpdatesNotis,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.getNotification);
  useEffect(() => {
    dispatch(getNotification());
  }, []);

  console.log(tripUpdatesNotis);

  const handleNavigation = (e) => {
    const navgiteTo = e.target.getAttribute("data-booking-id");
    navigate(navgiteTo);
  };

  return (
    <div
      className="bg-[#F5F9FF] z-50  w-[15rem] sm:w-[25rem] rounded-lg h-[2rem] absolute  top-[3rem] right-[3.5rem]"
      onClick={() => {
        setNotificationPopup(false);
      }}
    >
      <div
        className="arrow-up absolute right-3 sm:right-[5rem] top-[-10px]
            "
      ></div>

      <div>
        {loading && <Miniloader />}
        <div className="w-full p-3 bg-[#F5F9FF] drop-shadow-2xl rounded-md overflow-auto h-[30rem]">
          {data &&
            data?.data?.slice(0, 2).map((item, index) => {
              return (
                <div className=" p-3 bg-white rounded-md shadow-lg" key={index}>
                  Booking for {item.title} on {item.date} has been requested for
                  cancel. Link:
                  <Link
                    to={
                      "http://localhost:3001/booking-list/booking-details/" +
                      item._id
                    }
                    className=" text-blue-500 "
                  >
                    View Details
                  </Link>
                </div>
              );
            })}
          {tripUpdatesNotis?.map((data, index) => {
            return (
              <div className="p-3 flex flex-col gap-2 bg-white my-3 booking-notis-card rounded-md shadow-lg">
                <h4 className="text-black">{data.title}</h4>
                <p>
                  New Trip has been booked on location :{" "}
                  <span className="text-blue-500">{data.description}</span>
                </p>
                <p>
                  Name : <span className="text-blue-500">{data.userName}</span>
                </p>
                <p>
                  Email :{" "}
                  <span className="text-blue-500">{data.userEmail}</span>
                </p>
                <p>
                  Booked From User ID :{" "}
                  <span className="text-blue-500">{data.userId}</span>
                </p>
                <p className="text-end text-xs text-gray-300">
                  At {data.createdAt}
                </p>

                <Link
                  className="bg-orange-500 px-2 w-max flex text-white justify-self-end text-center"
                  to={
                    "http://localhost:3001/booking-list/booking-details/" +
                    data.refId
                  }
                >
                  View Details
                </Link>

                {/* <button
                  className="bg-orange-500 px-2 w-max flex text-white justify-self-end text-center"
                  data-booking-id={"booking-list/booking-details/" + data.refId}
                  onClick={handleNavigation}
                >
                  View Details
                </button> */}
              </div>
            );
          })}
          <div className="flex text-center  flex-col sjustify-center items-center space-y-2 p-2">
            <button
              className=" w-[80%] bg-[#E75C54] p-1 rounded-md text-white "
              onClick={() => {
                navigate("/cancel-requests");
              }}
            >
              See all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPop;
