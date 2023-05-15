import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import Sidebar from "../component/Sidebar/Sidebar";
import TravelType from "../component/TravelType/TravelType";

const Travel = () => {
  let email = localStorage.getItem("email");
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="Travel Type List" userName={email}/>
        <div className="md:h-[90vh]">
          <TravelType />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Travel;
