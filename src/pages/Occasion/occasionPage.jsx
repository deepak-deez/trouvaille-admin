import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Occasion from "../../components/Occasion/Occasion";
import Footer from "../../components/Footer/Footer";

const OccasionPage = () => {
  return (
    <div className="flex h-screen">
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
