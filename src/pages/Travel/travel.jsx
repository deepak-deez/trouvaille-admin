import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";
import TravelType from "../../components/TravelType/TravelType";

const Travel = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] h-[100vh] overflow-auto md:pb-16">
        <Navbar heading="Travel Type List" />
        <div>
          <TravelType />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Travel;
