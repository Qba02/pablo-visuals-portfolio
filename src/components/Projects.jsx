import React from "react";
import { Slider, SliderCard } from "../components/index";
import { projects, projectsTitle } from "../constants/content";
import { responsiveText } from "../styles/responsiveText";

const Projects = () => {
  return (
    <section
      id="projects"
      className="section flex flex-col items-center justify-between h-[300px] sm:h-[400px] lg:h-[550px]"
    >
      <h2 className={responsiveText.sectionHeading}>{projectsTitle}</h2>
      <div className="relative w-[70%] h-full">
        <Slider>
          {projects.map((project, index) => (
            <SliderCard
              key={index}
              title={project.title}
              bgImg={project.bgImg}
              url={project.url}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Projects;
