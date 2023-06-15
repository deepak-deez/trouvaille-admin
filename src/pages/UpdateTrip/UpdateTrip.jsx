import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import UpdateTripForm from "../../components/UpdatetripForm/UpdateTripForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UpdateTrip = () => {
  const { userDetails, error, loading } = useSelector(
    (state) => state.userLogin
  );
  const navigate= useNavigate()
  useEffect(()=>{
    if(userDetails===null)
    navigate("/")
  })
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="w-full">
        <Navbar heading="Edit Trip"/>
        <div className="md:h-[90vh] overflow-y-auto">
          <UpdateTripForm />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default UpdateTrip;
