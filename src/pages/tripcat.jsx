import React from "react";
import Sidebar from "../component/Sidebar/Sidebar";
import Navbar from "../component/Navbar/Navbar";
import Trip from "../component/Trip/Trip";
import Footer from "../component/Footer/Footer";
import { emphasize } from "@mui/material";

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
