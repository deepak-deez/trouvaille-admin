import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Sidebar from "../component/Sidebar/Sidebar";
import TravelType from "../component/TravelType/TravelType";

const Travel = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="All Users" />
        <div className="md:h-[90vh]">
          <TravelType />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Travel;
