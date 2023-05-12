import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import Navbar from "../component/Navbar/Navbar";
import UpdateTripForm from "../component/UpdatetripForm/UpdateTripForm";

const UpdateTrip = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full">
        <Navbar heading="Edit Trip" />
        <div className="md:h-[90vh]">
          <UpdateTripForm />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default UpdateTrip;
