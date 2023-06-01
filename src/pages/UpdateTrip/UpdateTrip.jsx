import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import UpdateTripForm from "../../components/UpdatetripForm/UpdateTripForm";

const UpdateTrip = () => {
  let email = localStorage.getItem("email");
  return (
    <div className="flex h-screen">
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
