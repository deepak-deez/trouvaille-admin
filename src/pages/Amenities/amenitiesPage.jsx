import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AmenitiesTable from "../../components/Amenities/Amenities";

const AmenitiesPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] h-[100vh] overflow-auto md:pb-16">
        <Navbar heading="All Amenities" />
        <div className="">
          <AmenitiesTable />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AmenitiesPage;
