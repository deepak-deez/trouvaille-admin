import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import AmenitiesTable from "../component/Amenities/Amenities";

const AmenitiesPage = () => {
  let email = localStorage.getItem("email");
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="All Amenities" userName={email}/>
        <div className="md:h-[90vh]">
          <AmenitiesTable />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AmenitiesPage;
