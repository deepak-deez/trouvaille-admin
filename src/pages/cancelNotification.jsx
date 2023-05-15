import React from "react";
import CancellationRequest from "../components/CancellationRequest/CancellationRequest";
import Sidebar from "../components/Sidebar/Sidebar";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const CancelNotification = () => {
  let email = localStorage.getItem("email");
  return (
    <div>
      <div className="flex h-full">
        <Sidebar />
        <div className="w-full bg-[#f5f7f7] ">
          <Navbar heading="Notifications" userName={email} />
          <div className="md:h-[90vh] flex flex-col">
            <CancellationRequest />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default CancelNotification;
