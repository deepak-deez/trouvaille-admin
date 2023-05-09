import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import Navbar from "../component/Navbar/Navbar";
import Trip from "../component/Trip/Trip";
import Footer from "../component/Footer/Footer";

const Tripcat = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="Trip Categories" />
        <div className="md:h-[90vh]">
          <Trip />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Tripcat;
