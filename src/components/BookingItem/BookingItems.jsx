import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API = process.env.REACT_APP_NODE_API;

const BookingItems = () => {
  const [response, setResponse] = useState();
  const responseHandler = async () => {
    const data = await axios.get(`${API}/all-booking`);
    setResponse(data);
  };

  useEffect(() => {
    responseHandler();
  }, []);
  console.log(response);
  if (response?.data)
    return response.data.data.map((data, index) => {
      return (
        <tr key={index}>
          <td className="p-3 ">{data.title}</td>
          <td className="p-3">{data.name}</td>
          <td className="p-3">{data.email}</td>
          <td className="p-3">{data.phone}</td>
          {data.status === "Pending" ? (
            <td className="p-3 text-orange-400 flex font-semibold items-center gap-1">
              <span className="w-[1rem] h-[1rem]  rounded-full bg-orange-400">
                {" "}
              </span>{" "}
              <span>Pending</span>{" "}
            </td>
          ) : (
            <td className="p-3 text-green-600 flex font-semibold items-center gap-1">
              <span className="w-[1rem] h-[1rem]  rounded-full bg-green-400">
                {" "}
              </span>{" "}
              <span>Confirm</span>
            </td>
          )}
          <td className="p-3">
            <Link
              className="border border-black px-3 py-1 rounded-md font-semibold"
              to={"/booking-list/booking-details/" + data._id}
            >
              View
            </Link>
          </td>
        </tr>
      );
    });
};

export default BookingItems;
