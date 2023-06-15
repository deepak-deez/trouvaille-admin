import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import User from "../../components/Users/user";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const { userDetails, error, loading } = useSelector(
    (state) => state.userLogin
  );
  const navigate= useNavigate();
  
  useEffect(()=>{
    if(userDetails===null)
    navigate("/")
  })

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] h-screen overflow-auto md:pb-16">
        <Navbar heading="All Users" />
        <User />
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
