import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import User from "../components/Users/user";
import Footer from "../components/Footer/Footer";

const Dashboard = () => {
  let email = localStorage.getItem("email");

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="All Users" userName={email} />
        <div className="md:h-[90vh]">
          <User />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
