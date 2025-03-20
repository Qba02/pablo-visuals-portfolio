import React from "react";
import { aboutMe } from "../constants/content";
import { responsiveText } from "../styles/responsiveText";
import { profilePic } from "../assets/index";

const About = () => {
  return (
    <section id="about" className="section flex items-center justify-between">
      <div className="w-[50%]">
        <h2 className={`${responsiveText.sectionHeading}`}>{aboutMe.title}</h2>
        <p className={`${responsiveText.sectionContent} text-justify`}>
          {aboutMe.content}
        </p>
        <p className={`${responsiveText.sectionContent} text-justify mt-4`}>
          {aboutMe.startSubcontent}
          <span className="font-bold text-rose-200">
            {aboutMe.boldSubcontent}
          </span>
          {aboutMe.endSubcontent}
        </p>
      </div>
      <div className="rounded-xl w-[40%] box-shadow ">
        <img
          src={profilePic}
          alt="My profile picture"
          className="object-contain rounded-xl"
        />
      </div>
    </section>
  );
};

export default About;
