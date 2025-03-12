import React from "react";
import { heroBg } from "../assets";
import { hero } from "../constants/content";
import { responsive } from "../responsive";

const Hero = () => {
  return (
    <section
      // className="reltive w-full h-screen mx-auto bg-cover bg-center bg-no-repeat"
      // zaminic na to powwyzje jak dostane zdjecie wiekszej rozdzielczosci
      className="reltive w-full h-screen mx-auto bg-contain bg-right bg-no-repeat bg-darkBg"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="absolute top-[40%] left-[15%] -translate-y-1/2">
        <h1 className={`${responsive.heroHeading}`}>{hero.title}</h1>
        <p className={`${responsive.heroContent} mt-5 w-1/2`}>{hero.content}</p>
        <div className="flex  space-x-6 mt-5">
          <button
            className={`${responsive.sectionContent} border-2 border-secondary text-light px-7 py-2 rounded-md font-semibold
            hover:text-secondary transition duration-500 ease-in-out`}
          >
            <span>Kontakt</span>
          </button>
          <button
            className={`${responsive.sectionContent} border-2 bg-light text-dark px-7 py-2 rounded-md font-semibold
             hover:bg-dark hover:border-light hover:text-light transition duration-500 ease-in-out`}
          >
            <span>Oferta</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
