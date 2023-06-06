import React from "react";
import NewTripForm from "../../components/NewTripForm/NewTripForm";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const AddNewTrip = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full">
        <Navbar heading="Add New Trip" />
        <div className="md:h-[90vh] overflow-y-auto">
          <NewTripForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AddNewTrip;
