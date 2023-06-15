import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getNotification } from "../../redux/actions/bookingActions";
import { useDispatch, useSelector } from "react-redux";
import Miniloader from "../MiniLoader/Miniloader";

const NotificationPop = ({ setNotificationPopup, notificationPopup }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.getNotification);
  useEffect(() => {
    dispatch(getNotification());
  }, []);

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
        <div className="w-full p-3 bg-[#F5F9FF] ">
          {data &&
            data?.data?.slice(0, 2).map((item, index) => {
              return (
                <p className=" p-3 bg-[#F5F9FF]" key={index}>
                  Booking for {item.title} on {item.date} has been requested for
                  cancel. Link:
                  <Link
                    to={
                      "http://localhost:3000/booking-list/booking-details/" +
                      item._id
                    }
                    className=" text-blue-500 "
                  >
                    View Details
                  </Link>
                </p>
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
