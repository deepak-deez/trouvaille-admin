import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CancellationRequest = () => {
  const requests = [
    {
      title: "Warsáw, Poland",
      date: "April 15, 2023",
      url: "https://www.google.com/",
    },
    {
      title: "Giza, Egypt",
      date: "July 19, 2023",
      url: "https://www.google.com/",
    },
    {
      title: "Venice, Italy",
      date: "May 24, 2023",
      url: "https://www.google.com/",
    },
  ];

  const [response, setResponse] = useState();
  const API = process.env.REACT_APP_NODE_API;
  const handleRequest = async () => {
    const data = await axios.get(`${API}/get-cancel-booking-request`);
    console.log(data);
    setResponse(data);
  };

  useEffect(() => {
    handleRequest();
  }, []);

  if (response?.data)
    return (
      <div className="w-full h-full bg-white p-2 flex flex-col gap-5">
        {response.data.data.map((item, index) => {
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
        })}
      </div>
    );
};

export default CancellationRequest;
