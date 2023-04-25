import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Sidebar from "../component/Sidebar/Sidebar";
import User from "../component/Users/user";
import Footer from "../component/Footer/Footer";

const Dashboard = () => {
  return (
    <div className="flex h-full">
      {/* <div className="w-[30%]"> */}
        <Sidebar />
      {/* </div> */}
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar />
        <User />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
