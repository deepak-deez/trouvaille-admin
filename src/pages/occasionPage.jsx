import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Sidebar from "../component/Sidebar/Sidebar";
import Occasion from "../component/Occasion/Occasion";
import Footer from "../component/Footer/Footer";

const OccasionPage = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="Occasions List" />
        <div className="md:h-[90vh]">
          <Occasion />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default OccasionPage;
