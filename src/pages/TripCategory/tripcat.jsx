import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Trip from "../../components/Trip/Trip";
import Footer from "../../components/Footer/Footer";


const Tripcat = () => {
  let email = localStorage.getItem("email");
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="Trip Categories" userName={email} />
        <div className="md:h-[90vh]">
          <Trip />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Tripcat;
