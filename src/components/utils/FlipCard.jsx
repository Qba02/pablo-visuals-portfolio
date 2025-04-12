import React from "react";
import { motion } from "framer-motion";
import { cardFadeUp } from "../../styles/animations";

export const FlipCard = ({ title, icon, subtitle, index }) => (
  <motion.div
    variants={cardFadeUp}
    whileHover={{
      scale: 1.1,
      rotate: index % 2 === 0 ? 3 : -3,
      transition: { duration: 0.5, ease: "easeOut" },
    }}
    className="offer-card relative min-h-36 sm:min-h-48 lg:min-h-56 text-center 
    rounded-2xl backdrop-blur-sm overflow-hidden border-tertiary border-[1px]"
  >
    <div className="flex w-full h-[70%] justify-center items-center px-4">
      {icon}
    </div>
    <div className="flex flex-col w-full h-[30%] justify-center items-center  px-2 bg-white/10">
      <h3 className="text-base lg:text-lg">{title}</h3>
      <p className="text-sm lg:text-base font-light text-light">{subtitle}</p>
    </div>
  </motion.div>
);

export default FlipCard;
