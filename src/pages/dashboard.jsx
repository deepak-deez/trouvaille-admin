import React, { useEffect } from "react";
import Navbar from "../component/Navbar/Navbar";
import Sidebar from "../component/Sidebar/Sidebar";
import User from "../component/Users/user";
import Footer from "../component/Footer/Footer";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Dashboard = () => {
  // const { mount, navHead } = useContext(GlobalContext);

  // function loadMount() {
  //   if (mount === "Dashboard") {
  //     return <User />;
  //   } else if (mount === "Bookings") {
  //     return <Booking />;
  //   }
  // }

  // useEffect(() => {
  //   loadMount();
  // }, []);

  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="w-full bg-[#f5f7f7] ">
        <Navbar heading="All Users" />
        <div className="md:h-[90vh]">
          <User />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
