import React, { useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import CurrentBookingDetails from "../components/CurrentBookingDetails/CurrentBookingDetails";

const BookingDetails = () => {
  let email = localStorage.getItem("email");
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="Booking Details" userName={email} />
        <div className="md:h-[90vh] flex flex-col">
          <CurrentBookingDetails />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BookingDetails;
