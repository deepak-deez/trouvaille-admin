import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import User from "../../components/Users/user";
import Footer from "../../components/Footer/Footer";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="All Users"/>
        <div className="md:h-[90vh]">
          <User />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
