import React, { useState } from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import { Link,useParams } from "react-router-dom";



const BookingDetails = () => {

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
    title: "Giza, Egypt",
    name: "Carmen Collins",
    email: "carmencollins@info.com",
    phone: "+41-22-767-6111",
    status: "Confirm"
  },
  {
    id: 3,
    title: "Venice, Italy",
    name: "Arturo Reese",
    email: "arturoreese@info.com",
    phone: "+41-22-767-6111",
    status: "Pending"
  },
];

let { id } = useParams();

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
                <p className="text-3xl font-semibold">{bookingData[id-1].title}</p>
                <Link
                  to={'/booking-list/booking-details/'+2+'/cancel-booking'}
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
                  <p> {bookingData[id-1].name}</p>
                  <p> {bookingData[id-1].passengers}3</p>
                  <li>list data</li>
                  <p>{bookingData[id-1].email}</p>
                  <p>{bookingData[id-1].phone}</p>
                  <p> {bookingData[id-1].address}</p>
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
