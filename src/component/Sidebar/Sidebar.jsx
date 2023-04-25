import React from "react";
import "./Sidebar.scss";
import mainLogo from "../../assets/image/navbar/Site-logo.svg";

const Sidebar = () => {
  return (
    <div className="mainSideBar flex flex-col h-[90vh]">
      <div className="flex p-3 justify-center space-x-10">
        <img src={mainLogo} alt="logo" />
        <div className="flex flex-col justify-center items-center">
          <h3 className="trouvaille-heading">trouvaille</h3>
          <span className="trouvaille-text">Front-facing Website</span>
        </div>
      </div>

      <div>{/* links */}</div>

      <div className="bg-[#E85C53] p-3 text-center">
        <a className="text-white" href="superAdmins">
          Contact Super Admin
        </a>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h4 className="text-[#E85C53] font-semibold ">Admin Dashboard</h4>
        <h4 className="sidebar-text font-semibold">2021 All Rights Reserved</h4>
        <div className="flex w-[50%] p-5 policy items-center">
          <a className="sidebar-text font-semibold" href="policy">
            Policy
          </a>
          <hr className="w-[20%]" />
          <a className="sidebar-text font-semibold" href="Tc">
            T & C
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
