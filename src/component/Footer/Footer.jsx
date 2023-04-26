import React from "react";
import "./style.scss";
const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row relative bottom-0 p-5 justify-start items-center ">
      <a href="dashboard" className="text-[#E75C54] px-3">
        Trouvaille
      </a>
      <h5 className="px-4">2021 All Rights Reserved,</h5>
      <a className="sidebar-text font-semibold" href="policy">
        Policy
      </a>
      <hr className="w-[20px]" />
      <a className="sidebar-text font-semibold" href="Tc">
        T & C
      </a>
    </footer>
  );
};

export default Footer;
