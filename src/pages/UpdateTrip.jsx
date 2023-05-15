import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import Navbar from "../component/Navbar/Navbar";
import UpdateTripForm from "../component/UpdatetripForm/UpdateTripForm";

const UpdateTrip = () => {
  let email = localStorage.getItem("email");
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full">
        <Navbar heading="Edit Trip" userName={email} />
        <div className="md:h-[90vh]">
          <UpdateTripForm />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default UpdateTrip;
