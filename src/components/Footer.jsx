import React from "react";
import { logo } from "../assets";

const Footer = () => {
  return (
    <footer id="footer" className="flex flex-column p-4">
      <div className="">
        <img
          src={logo}
          alt="PabloVisuals logo - spartan helmet"
          className="cursor-pointer w-12 h-12 object-contain hover:scale-110 
                  hover:-rotate-6 transition-transform duration-500"
        />
      </div>
      <div className=""></div>
    </footer>
  );
};

export default Footer;
