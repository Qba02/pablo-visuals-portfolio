import React, { useState } from "react";
import { motion } from "framer-motion";
import { SiYoutube } from "react-icons/si";
import { IoIosArrowDropright } from "react-icons/io";
import { IoIosArrowDropleft } from "react-icons/io";

const MAX_VISIBILITY = 3;

export const SliderCard = ({ title, bgImg, url }) => (
  <div
    className="ralative w-full h-full bg-cover bg-center bg-no-repeat p-8 rounded-3xl
     transition-all duration-300 ease-out"
    style={{ backgroundImage: `url(${bgImg})` }}
  >
    <h3 className="text-center text-xl lg:text-2xl font-semibold text-dark">
      {title}
    </h3>
    <a href={url} target="_blank" rel="noopener noreferrer">
      <SiYoutube className="social-icon lg:w-24 lg:h-24 absolute bottom-[5%] right-[5%]"></SiYoutube>
    </a>
  </div>
);

export const Slider = ({ children }) => {
  const count = React.Children.count(children);
  const [active, setActive] = useState(Math.round(count / 2));

  const handlePrev = () => {
    setActive((prev) => (prev === 0 ? count - 1 : prev - 1));
  };

  const handleNext = () => {
    setActive((prev) => (prev === count - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full h-full preserve-3d perspective-800">
      <button className="slider-button left" onClick={handlePrev}>
        <IoIosArrowDropleft></IoIosArrowDropleft>
      </button>
      {React.Children.map(children, (child, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-full hover:scale-95 transition-all duration-500 ease-out blur-filter transform-card"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </motion.div>
      ))}

      <button className="slider-button right" onClick={handleNext}>
        <IoIosArrowDropright></IoIosArrowDropright>
      </button>
    </div>
  );
};
