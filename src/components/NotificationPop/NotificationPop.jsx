import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { getNotification } from "../../redux/actions/bookingActions";
import { useDispatch, useSelector } from "react-redux";
import Miniloader from "../MiniLoader/Miniloader";
import axios from "axios";
import "./style.scss";

const NotificationPop = ({
  setNotificationPopup,
  notificationPopup,
  tripUpdatesNotis,
  notisUnread,
  setNotisUnread,
  tripCancellationNotis,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.getNotification);
  useEffect(() => {
    dispatch(getNotification());
  }, []);

  const handleNavigation = (e) => {
    const navgiteTo = e.target.getAttribute("data-booking-id");
    navigate(navgiteTo);
  };

  const navigateHandler = async ({ target }) => {
    const parentElement = target.parentElement;
    const notificationId = target.getAttribute("data-notification-id");

    const markasReadApi =
      process.env.REACT_APP_NODE_API +
      "/set-notification-mark-read/" +
      notificationId;

    try {
      const response = await axios.get(markasReadApi);

      if (response.status === 200) {
        if (notisUnread > 0) {
          setNotisUnread(notisUnread - 1);
        }

        parentElement.classList.toggle("bg-blue-100");
      }
    } catch (err) {
      console.log(err);
    }
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
        <div className="w-full p-3 bg-[#F5F9FF] drop-shadow-2xl  rounded-md h-[35rem] relative">
          <div className="overflow-y-scroll notification-box max-h-[45%]">
            {tripCancellationNotis &&
              tripCancellationNotis?.data
                ?.slice(0)
                .reverse()
                .map((item, index) => {
                  return (
                    <div
                      className={
                        "p-3  rounded-md shadow-lg mb-5 " +
                        (!item?.readStatus ? " bg-blue-100 " : " bg-white ")
                      }
                      key={index}
                    >
                      Booking for{" "}
                      <span className="text-[#E75C54]">{item.title}</span> on{" "}
                      <span className="text-[#E75C54]">{item.createdAt}</span>{" "}
                      has been requested for cancellation.{" "}
                      <Link
                        to={
                          "http://localhost:3001/booking-list/booking-details/" +
                          item.refId
                        }
                        className=" text-blue-500 "
                        data-notification-id={item?._id}
                        data-ref-id={item?.refId}
                        onClick={navigateHandler}
                      >
                        View Details
                      </Link>
                    </div>
                  );
                })}
          </div>
          <div className="overflow-y-scroll notification-box max-h-[45%]">
            {tripUpdatesNotis
              ?.slice(0)
              .reverse()
              .map((data, index) => {
                return (
                  <div
                    className={
                      "p-3 flex flex-col gap-2 my-3 booking-notis-card rounded-md shadow-lg " +
                      (!data?.readStatus ? "bg-blue-100" : "bg-white")
                    }
                  >
                    <h4 className="text-black">{data.title}</h4>
                    <p>
                      New Trip has been booked on location :{" "}
                      <span className="text-blue-500">{data.description}</span>
                    </p>
                    <p>
                      Name :{" "}
                      <span className="text-blue-500">{data.userName}</span>
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
                      data-notification-id={data?._id}
                      data-ref-id={data?.refId}
                      onClick={navigateHandler}
                    >
                      View Details
                    </Link>
                  </div>
                );
              })}
          </div>
          <div className="flex text-center  flex-col sjustify-center items-center space-y-2 p-2 sticky bottom-0">
            <button
              className=" w-[80%] bg-[#E75C54] p-1 rounded-md text-white hover:brightness-90 transition-all duration-200 "
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
