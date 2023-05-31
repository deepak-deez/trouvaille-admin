import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Occasion from "../../components/Occasion/Occasion";
import Footer from "../../components/Footer/Footer";

const OccasionPage = () => {
  let email = localStorage.getItem("email");
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="Occasions List" userName={email} />
        <div className="md:h-[90vh]">
          <Occasion />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default OccasionPage;
