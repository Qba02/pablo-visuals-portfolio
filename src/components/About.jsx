import React from "react";
import { aboutMe } from "../constants/content";
import { responsiveText } from "../styles/responsiveText";
import { profilePic } from "../assets/index";

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className={`${responsiveText.sectionHeading} section-title`}>
        {aboutMe.title} <span>{aboutMe.tagline}</span>
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full mb-10 lg:w-[50%] lg:mb-0">
          <p className="text-base lg:text-xl tracking-[4px] text-center uppercase">
            {aboutMe.subtitle}
          </p>
          <p className={`${responsiveText.sectionContent} text-justify`}>
            {aboutMe.content}
          </p>
          <p className={`text-gray-500 text-justify mt-2`}>
            {aboutMe.subcontent}
          </p>
          <p
            className={`${responsiveText.sectionContent} text-center italic mt-1 sm:mt-2 lg:mt-5`}
          >
            {aboutMe.quote}
            <span
              className={`${responsiveText.sectionContent} not-italic block`}
            >
              {aboutMe.quoteAuthor}
            </span>
          </p>
        </div>
        <div className="rounded-xl w-full lg:w-[40%] box-shadow ">
          <img
            src={profilePic}
            alt="My profile picture"
            className="object-contain rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
