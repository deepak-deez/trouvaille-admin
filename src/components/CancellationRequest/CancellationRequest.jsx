import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { socket } from "../../functions/socketConnection";

const CancellationRequest = () => {
  const [response, setResponse] = useState();

  const API = process.env.REACT_APP_NODE_API;

  const [notisUnread, setNotisUnread] = useState([]);
  const [statusNotis, setStatusNotis] = useState();

  useEffect(() => {
    if (!statusNotis) {
      getAllNotifications();
    }

    socket.on("getCurrentBooking", (res) => {
      setStatusNotis(res);

      setNotisUnread(
        res?.data?.filter((data) => {
          return data.readStatus === false;
        })
      );
    });
  }, [socket]);

  const getAllNotifications = async () => {
    const bookingNotisUrl = `${process.env.REACT_APP_NODE_API}/get-booking-notifications/Frontend-user`;

    const res = await axios.get(bookingNotisUrl);

    setStatusNotis(res?.data);

    setNotisUnread(
      res?.data?.data.filter((data) => {
        return data.readStatus === false;
      })
    );
  };

  const handleRequest = async () => {
    const data = await axios.get(`${API}/get-cancel-booking-request`);
    setResponse(data);
  };

  useEffect(() => {
    handleRequest();
  }, []);

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
        const notisUnreadCopy = [...notisUnread];

        notisUnreadCopy.splice(
          notisUnreadCopy.find((data) => data._id === notificationId),
          1
        );

        setNotisUnread(notisUnreadCopy);
        parentElement.classList.toggle("bg-blue-100");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full bg-white p-2 flex flex-col gap-5 h-[85vh] overflow-auto  ">
      {response?.data
        ? response?.data?.data.map((item, index) => {
            return (
              <p className="mx-5 p-3 rounded-lg bg-[#F5F9FF]" key={index}>
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
          })
        : ""}
      {/* <div className="h-[50vh]"> */}
      {statusNotis?.data
        ?.slice(0)
        .reverse()
        .map((data, index) => {
          return (
            <div
              className={
                "p-3 flex flex-col gap-2 bg-white my-3 booking-notis-card rounded-md shadow-lg " +
                (!data.readStatus ? " bg-blue-100 " : " bg-white ")
              }
            >
              <h4 className="text-black">{data.title}</h4>
              <p>
                New Trip has been booked on location :{" "}
                <span className="text-blue-500">{data.description}</span>
              </p>
              <p>
                Name : <span className="text-blue-500">{data.userName}</span>
              </p>
              <p>
                Email : <span className="text-blue-500">{data.userEmail}</span>
              </p>
              <p>
                Booked From User ID :
                <span className="text-blue-500">{data.userId}</span>
              </p>
              <p className="text-end text-xs text-gray-300">
                At {data.createdAt}
              </p>

              <Link
                className="bg-orange-500 px-2 w-max flex text-white justify-self-end text-center"
                to={
                  "http://localhost:3000/booking-list/booking-details/" +
                  data.refId
                }
                onClick={navigateHandler}
                data-notification-id={data._id}
                data-ref-id={data.refId}
              >
                View Details
              </Link>
            </div>
          );
        })}
      {/* </div> */}
    </div>
  );
};

export default CancellationRequest;
