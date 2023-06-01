import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import TripList from "../../components/TripList/TripList";

const TripListPage = () => {
  let email = localStorage.getItem("email");
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="List Of Trips" userName={email} />
        <div className="md:h-[90vh]">
          <TripList />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default TripListPage;
