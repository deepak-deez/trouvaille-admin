import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Occasion from "../../components/Occasion/Occasion";
import Footer from "../../components/Footer/Footer";

const OccasionPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] h-[100vh] overflow-scroll md:pb-16">
        <Navbar heading="Occasions List" />
        <div>
          <Occasion />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default OccasionPage;
