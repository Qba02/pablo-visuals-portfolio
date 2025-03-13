import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../constants/links";
import { logo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
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
      className={`fixed top-0 z-50 flex items-center justify-center w-full py-4 px-10 transition-all duration-500 ${
        onTop ? "bg-transparent" : "bg-dark"
      }`}
    >
      <div className="w-full flex justify-between">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="PabloVisuals logo - spartan helmet"
            className="w-20 h-20 object-contain hover:scale-110 
            hover:-rotate-6 transition-transform duration-500"
          />
        </Link>
        <ul className="list-none flex items-center gap-12">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={`${
                  active === link.id ? "text-secondary" : "text-white"
                } nav`}
                onClick={() => setActive(link.id)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
