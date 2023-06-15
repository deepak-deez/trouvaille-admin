import React from "react";
import NewTripForm from "../../components/NewTripForm/NewTripForm";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const AddNewTrip = () => {
  return (
    <div className="flex h-screen overflow-auto">
      <Sidebar />
      <div className="w-full h-screen overflow-auto md:pb-16 ">
        <Navbar heading="Add New Trip" />
        <div className="p-5 lg:px-10 lg:py-5">
          <NewTripForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AddNewTrip;
