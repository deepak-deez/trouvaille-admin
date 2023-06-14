import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Trip from "../../components/Trip/Trip";
import Footer from "../../components/Footer/Footer";

const Tripcat = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] h-[100vh] overflow-auto md:pb-16">
        <Navbar heading="Trip Categories" />
        <div>
          <Trip />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Tripcat;
