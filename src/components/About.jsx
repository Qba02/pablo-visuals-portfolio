import React from "react";
import { aboutMe } from "../constants/content";
import { responsive } from "../responsive";
import { profilePic } from "../assets/index";

const About = () => {
  return (
    <section id="about" className="section flex items-center justify-between">
      <div className="w-[50%]">
        <h2 className={`${responsive.sectionHeading}`}>{aboutMe.title}</h2>
        <p className={`${responsive.sectionContent} text-justify`}>
          {aboutMe.content}
        </p>
        <p className={`${responsive.sectionContent} text-justify mt-4`}>
          {aboutMe.subcontent}
        </p>
      </div>
      <div className="rounded-xl w-[40%] box-shadow">
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
