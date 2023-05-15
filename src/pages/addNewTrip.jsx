import React from "react";
import NewTripForm from "../component/NewTripForm/NewTripForm";
import Sidebar from "../component/Sidebar/Sidebar";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/Footer/Footer";

const AddNewTrip = () => {
  let email = localStorage.getItem("email");
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full">
        <Navbar heading="Add New Trip" userName={email} />
        <div className="md:h-[90vh]">
          <NewTripForm />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default AddNewTrip;
