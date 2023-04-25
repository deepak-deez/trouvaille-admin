import React from "react";
import "./style.scss";
const Footer = () => {
  return (
    <footer className="flex relative bottom-0 p-5 ">
      <a href="../../pages/dashboard.jsx" className="text-[#E75C54]">
        Trouvaille
      </a>
      <h5>2021 All Rights Reserved,</h5>
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
