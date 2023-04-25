import React from "react";
import Navbar from "../component/Navbar/Navbar";
import Sidebar from "../component/Sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-1/2">
        <Sidebar />
      </div>
      <div className="w-full">
        <Navbar />
      </div>
    </div>
  );
};

export default Dashboard;
