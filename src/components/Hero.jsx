import React from "react";
import { heroBg2 } from "../assets";
import { hero } from "../constants/content";
import { responsiveText } from "../styles/responsiveText";
import { SiYoutube } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { externalLinks } from "../constants/links";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { textFadeUp } from "../styles/animations";

const Hero = () => {
  const ytLink = externalLinks.find((link) => link.id === "yt");
  const instaLink = externalLinks.find((link) => link.id === "insta");

  return (
    <section
      id="hero"
      className="relative w-full h-screen mx-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg2})` }}
    >
      <motion.div
        initial="hidden"
        animate="show"
        className="absolute bottom-[10%] left-[5%] sm:left-[7%] md:left-[10%] lg:left-[15%] 
        sm:bottom-[35%] lg:bottom-[40%] sm:translate-y-1/2"
      >
        <motion.h1
          variants={textFadeUp}
          className={`${responsiveText.heroHeading}`}
        >
          {hero.title}
        </motion.h1>
        <motion.p
          variants={textFadeUp}
          className={`${responsiveText.heroContent} text-justify mt-1 sm:mt-2 lg:mt-5 w-1/2 xs:w-1/3`}
        >
          {hero.content}
        </motion.p>

        <motion.div variants={textFadeUp} className="flex space-x-6 mt-5">
          <Link
            to="contact"
            smooth={true}
            duration={100}
            className={`cursor-pointer text-sm lg:text-lg border-[3px] border-secondary text-secondary py-2 px-3 xs:px-5 lg:px-7 
              rounded-md font-medium hover:text-light hover:border-light transition duration-500 ease-in-out`}
            offset={-120}
          >
            Kontakt
          </Link>
          <Link
            to="offer"
            smooth={true}
            duration={100}
            className={`cursor-pointer text-sm lg:text-lg border-[3px] bg-light text-dark py-2  px-3 xs:px-5 lg:px-7 
              rounded-md font-medium hover:bg-transparent hover:border-light hover:text-light 
              transition duration-500 ease-in-out`}
            offset={-120}
          >
            &nbsp;Oferta&nbsp;
          </Link>
        </motion.div>
      </motion.div>
      <div className="absolute bottom-3 right-3 sm:bottom-[5%] sm:right-[2%] flex flex-col space-y-5 items-center">
        <div
          className="rounded-sm hidden sm:block w-[3px] h-48 xl:h-80 bg-gradient-to-b from-dark via-gray-500
          to-light opacity-90"
          aria-hidden="true"
        ></div>
        <a href={ytLink.href} target="_blank" rel="noopener noreferrer">
          <SiYoutube className="social-icon"></SiYoutube>
        </a>

        <a href={instaLink.href} target="_blank" rel="noopener noreferrer">
          <SiInstagram className="social-icon"></SiInstagram>
        </a>
      </div>
    </section>
  );
};

export default Hero;
