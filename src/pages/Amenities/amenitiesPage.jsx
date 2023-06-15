import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import AmenitiesTable from "../../components/Amenities/Amenities";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AmenitiesPage = () => {
  const { userDetails, error, loading } = useSelector(
    (state) => state.userLogin
  );
  const navigate= useNavigate()
  useEffect(()=>{
    if(userDetails===null)
    navigate("/")
  })
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] h-[100vh] overflow-auto md:pb-16">
        <Navbar heading="All Amenities" />
        <div className="">
          <AmenitiesTable />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AmenitiesPage;
