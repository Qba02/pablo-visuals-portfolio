import React from "react";
import { heroBg2 } from "../assets";
import { hero } from "../constants/content";
import { responsive } from "../responsive";
import { SiYoutube } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { externalLinks } from "../constants/links";
import { Link } from "react-scroll";

const Hero = () => {
  const ytLink = externalLinks.find((link) => link.id === "yt");
  const instaLink = externalLinks.find((link) => link.id === "insta");

  return (
    <section
      id="hero"
      className="relative w-full h-screen mx-auto bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroBg2})` }}
    >
      <div className="absolute top-[55%] left-[12%] -translate-y-1/2">
        <h1 className={`${responsive.heroHeading}`}>{hero.title}</h1>
        <p className={`${responsive.heroContent} mt-5 w-1/2`}>{hero.content}</p>
        <div className="flex  space-x-6 mt-5">
          <Link
            to="contact"
            smooth={true}
            duration={100}
            className={`cursor-pointer text-lg border-[3px] border-secondary text-secondary px-7 py-2 rounded-md font-semibold
                hover:text-light hover:border-light transition duration-500 ease-in-out`}
            offset={-120}
          >
            Kontakt
          </Link>
          <Link
            to="offer"
            smooth={true}
            duration={100}
            className={`cursor-pointer text-lg border-[3px] bg-light text-dark px-7 py-2 rounded-md font-semibold
              hover:bg-transparent hover:border-light hover:text-light transition duration-500 ease-in-out`}
            offset={-120}
          >
            &nbsp;Oferta&nbsp;
          </Link>
        </div>
      </div>
      <div className="absolute bottom-[5%] right-[2%] flex flex-col space-y-5 items-center">
        <div
          className="rounded-sm hidden sm:block w-[3px] h-48 xl:h-80 bg-gradient-to-b from-dark via-gray-500 to-light opacity-90"
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
