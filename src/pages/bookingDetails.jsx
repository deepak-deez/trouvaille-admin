import React, { useState } from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

import CurrentBookingDetails from "../component/CurrentBookingDetails/CurrentBookingDetails";

const BookingDetails = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="Booking Details" />
        <div className="md:h-[90vh] flex flex-col">
          <CurrentBookingDetails />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BookingDetails;
