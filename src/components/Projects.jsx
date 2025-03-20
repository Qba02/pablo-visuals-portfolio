import React from "react";
import { Slider, SliderCard } from "../components/index";
import { projects } from "../constants/content";
import { responsiveText } from "../styles/responsiveText";

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className={`${responsiveText.sectionHeading} section-title`}>
        {projects.title} <span>{projects.tagline}</span>
      </h2>
      <div className="flex flex-col items-center justify-between h-[300px] sm:h-[400px] lg:h-[500px]">
        <div className="relative w-[70%] h-full">
          <Slider>
            {projects.points.map((project, index) => (
              <SliderCard
                key={index}
                title={project.title}
                bgImg={project.bgImg}
                url={project.url}
              />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;
