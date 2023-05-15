import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Sidebar from "../components/Sidebar/Sidebar";
import TravelType from "../components/TravelType/TravelType";

const Travel = () => {
  let email = localStorage.getItem("email");
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="Travel Type List" userName={email} />
        <div className="md:h-[90vh]">
          <TravelType />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Travel;
