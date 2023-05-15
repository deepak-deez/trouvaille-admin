import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";
import mainLogo from "../../assets/image/navbar/Site-logo.svg";
import SideBarLinks from "./sidebarData";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Sidebar = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      {/* <div className="p-4 xl:p-0 relative"> */}
      <button
        className="navbar_toggle absolute top-[2%] left-2 block xl:hidden bg-[#E85C53] text-white hover:text-white px-2 py-1"
        style={{
          zIndex: "20000",
        }}
        onClick={() => {
          setShow(!show);
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </button>
      {/* </div> */}
      <div
        className={`mainSideBar z-50 absolute md:static xl:flex md:w-[40%] p-5 flex-col bg-white h-full ${
          !show && "hidden-bar"
        }`}
      >
        <div className="h-[80%]">
          <div className={`sidebar-logo flex p-3 px-4 justify-between `}>
            <div className="flex justify-center px-3 items-center">
              <img src={mainLogo} alt="logo" />
            </div>
            <div className="flex flex-col justify-start items-start">
              <h3 className="trouvaille-heading text-2xl">trouvaille</h3>
              <h3 className="trouvaille-text">Front-facing Website</h3>
            </div>
          </div>

          <div className={`sidebar-Links`}>
            {SideBarLinks.map((item, index) => {
              return (
                <NavLink
                  to={item.path}
                  className="flex w-full border-b-2 m-auto items-center p-2 md:py-5 px-11"
                  key={index}
                >
                  <img src={item.icon} alt="" />
                  <h3
                    className="ms-5"
                    onClick={() => {
                     
                    }}
                  >
                    {item.heading}
                  </h3>
                </NavLink>
              );
            })}
          </div>
        </div>

        <div
          className={`sidebar-footer relative left-0 bottom-0 w-full h-[10%] md:mt-30`}
        >
          <div className="bg-[#E85C53] p-3 text-center">
            <a className="text-white" href="superAdmins">
              Contact Super Admin
            </a>
          </div>
          <div className="flex flex-col justify-center items-center mt-5 ">
            <h4 className="text-[#E85C53] font-semibold ">Admin Dashboard</h4>
            <h4 className="sidebar-text font-semibold">
              2021 All Rights Reserved
            </h4>
            <div className="flex w-full justify-center  my-2 policy items-center">
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
    </>
  );
};

export default Sidebar;
