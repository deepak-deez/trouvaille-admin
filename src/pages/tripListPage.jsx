import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";
import TripList from "../component/TripList/TripList";

const TripListPage = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="All Users" />
        <div className="md:h-[90vh]">
          <TripList />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TripListPage;
