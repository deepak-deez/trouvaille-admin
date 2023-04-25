import React from "react";
import "./Sidebar.scss";
import mainLogo from "../../assets/image/navbar/Site-logo.svg";
import SideBarLinks from "./sidebarData";

const Sidebar = () => {
  return (
    <div className="mainSideBar flex flex-col relative">
      <div className=" sidebar-logo flex p-3 justify-center space-x-10">
        <img src={mainLogo} alt="logo" />
        <div className="flex flex-col justify-center items-center">
          <h3 className="trouvaille-heading">trouvaille</h3>
          <span className="trouvaille-text">Front-facing Website</span>
        </div>
      </div>

      <div className="sidebar-Links ">
        {SideBarLinks.map((item, index) => {
          return (
            <div
              className="flex w-full border-b-2 m-auto items-center p-4 md:p-9 px-10"
              key={index}
            >
              <img src={item.icon} alt="" />
              <h3 className="ms-5">{item.heading}</h3>
            </div>
          );
        })}
      </div>

      <div className="sidebar-footer absolute left-0 bottom-0 w-full">
        <div className="bg-[#E85C53] p-3 text-center">
          <a className="text-white" href="superAdmins">
            Contact Super Admin
          </a>
        </div>
        <div className="flex flex-col justify-center items-center py-10 ">
          <h4 className="text-[#E85C53] font-semibold ">Admin Dashboard</h4>
          <h4 className="sidebar-text font-semibold">
            2021 All Rights Reserved
          </h4>
          <div className="flex w-full justify-center  p-5 policy items-center">
            <a className="sidebar-text font-semibold" href="policy">
              Policy
            </a>
            <hr className="w-[10%]" />
            <a className="sidebar-text font-semibold" href="Tc">
              T & C
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
