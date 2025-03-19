import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { navLinks } from "../constants/links";
import { logo } from "../assets";

const Navbar = () => {
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 200 ? setOnTop(false) : setOnTop(true);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 flex items-center justify-center w-full py-3 px-10 transition-all duration-500 ease-in ${
        onTop ? "bg-transparent py-8" : "bg-darkGrey nav-shadow"
      }`}
    >
      <div className="w-full flex justify-between">
        <Link to="hero" className="flex items-center">
          <img
            src={logo}
            alt="PabloVisuals logo - spartan helmet"
            className="cursor-pointer w-16 h-16 object-contain hover:scale-110 
            hover:-rotate-6 transition-transform duration-500"
          />
        </Link>
        <ul className="list-none flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                smooth={true}
                duration={100}
                className="nav"
                spy={true}
                offset={-150}
                activeClass="text-secondary"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
