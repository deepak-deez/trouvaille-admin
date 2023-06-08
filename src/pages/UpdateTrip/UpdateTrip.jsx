import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import UpdateTripForm from "../../components/UpdatetripForm/UpdateTripForm";

const UpdateTrip = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full">
        <Navbar heading="Edit Trip"/>
        <div className="md:h-[90vh] overflow-y-auto">
          <UpdateTripForm />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default UpdateTrip;
