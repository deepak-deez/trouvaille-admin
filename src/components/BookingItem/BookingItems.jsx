import axios from "axios";
import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getBooking } from "../../redux/actions/bookingActions";

const BookingItems = () => {
  const { data } = useSelector((state) => state.getBooking);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getBooking());
  }, []);

  if (data && data?.data)
    return data?.data.map((items, index) => {
      return (
        <tr key={index}>
          <td className="p-3 flex justify-start items-center ">
            <img className="w-[10%]" src={items.image.url} alt="" />{" "}
            {items.title}
          </td>
          <td className="p-3">{items.name}</td>
          <td className="p-3">{items.email}</td>
          <td className="p-3">{items.phone}</td>

          <td
            className={`p-3 text-orange-400 flex font-semibold items-center gap-1 ${
              items.bookingStatus === "pending" ? "flex" : "hidden"
            }`}
          >
            <span className="w-[1rem] h-[1rem]  rounded-full bg-orange-400"></span>
            <span>Pending</span>
          </td>

          <td
            className={`p-3 text-green-600 flex font-semibold items-center gap-1 ${
              items.bookingStatus === "confirm" ? "flex" : "hidden"
            }`}
          >
            <span className="w-[1rem] h-[1rem]  rounded-full bg-green-400"></span>
            <span>Confirm</span>
          </td>

          <td className="p-3">
            <Link
              className="border border-black px-3 py-1 rounded-md font-semibold"
              to={"/booking-list/booking-details/" + items._id}
            >
              View
            </Link>
          </td>
        </tr>
      );
    });
};

export default BookingItems;
