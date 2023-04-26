import React, { useEffect } from "react";
import Navbar from "../component/Navbar/Navbar";
import Sidebar from "../component/Sidebar/Sidebar";
import User from "../component/Users/user";
import Footer from "../component/Footer/Footer";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Booking from "../component/Booking/Booking";

const Dashboard = () => {
  const { mount, navHead } = useContext(GlobalContext);

  function loadMount() {
    if (mount === "Dashboard") {
      return <User />;
    } else if (mount === "Bookings") {
      return <Booking />;
    }
  }

  useEffect(() => {
    loadMount();
  }, []);

  return (
    <div className="flex h-full">
      {/* <div className="w-[30%]"> */}
      <Sidebar />
      {/* </div> */}
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading={navHead} />
        <div className="h-auto overflow-scroll"> {loadMount()}</div>

        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
