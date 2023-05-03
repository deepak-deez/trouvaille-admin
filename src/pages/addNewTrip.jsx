import React from "react";
import NewTripForm from "../component/NewTripForm.jsx/NewTripForm";
import Sidebar from "../component/Sidebar/Sidebar";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const AddNewTrip = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full">
        <Navbar heading="Add New Trip" />
        <div className="md:h-[90vh]">
          <NewTripForm />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AddNewTrip;
