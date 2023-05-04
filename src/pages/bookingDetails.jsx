import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import { Link } from "react-router-dom";

import { useParams } from "react-router-dom";

const bookingData = [
  {
    id: 1,
    title: "Warsáw, Poland",
    name: "Connie Parks",
    email: "conniepark@info.com",
    phone: "+41-22-767-6111",
    address: "156 South Lexington Rd.Paterson, NJ 07501",
  },
  {
    id: 2,
    title: "Warsáw, Poland",
    name: "Connie Parks",
    email: "conniepark@info.com",
    phone: "+41-22-767-6111",
    address: "156 South Lexington Rd.Paterson, NJ 07501",
  },
  {
    id: 3,
    title: "Warsáw, Poland",
    name: "Connie Parks",
    email: "conniepark@info.com",
    phone: "+41-22-767-6111",
    address: "156 South Lexington Rd.Paterson, NJ 07501",
  },
];

const Id = () => {
  const routeParams = useParams();
  console.log(routeParams);
};

const BookingDetails = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="Booking Details" />
        <div className="md:h-[90vh] flex flex-col">
          <div className="flex w-full">
            <div className="flex w-[50%]">
              <div>img1</div>
              <div className="flex flex-col">
                <div>img2</div>
                <div>img3</div>
              </div>
            </div>
            <div className="w-[50%]">
              <div className="flex justify-between">
                <p className="text-3xl font-semibold">{bookingData[0].title}</p>
                <Link
                  to="/cancelBooking"
                  className="justify-self-end border px-3 py-2 rounded-md border-black me-5"
                >
                  Cancel
                </Link>
              </div>
              <div className="flex gap-2">
                <div className="flex flex-col text-[#8E8D98] gap-5">
                  <span className="">Passenger name:</span>
                  <span className="">Other passengers:</span>
                  <li>list data</li>
                  <span className="">Email address:</span>
                  <span className="">Phone:</span>
                  <span className="">Address:</span>
                </div>

                <div className="flex flex-col gap-5 font-semibold">  
                  <p> {bookingData[0].name}</p>
                  <p> {bookingData[0].passengers}3</p>
                  <li>list data</li>
                  <p>{bookingData[0].email}</p>
                  <p>{bookingData[0].phone}</p>
                  <p> {bookingData[0].address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BookingDetails;
