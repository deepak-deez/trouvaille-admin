import React, { useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import CurrentBookingDetails from "../../components/CurrentBookingDetails/CurrentBookingDetails";

const BookingDetails = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="Booking Details"/>
        <div className="md:h-[90vh] overflow-y-auto flex flex-col">
          <CurrentBookingDetails />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BookingDetails;
