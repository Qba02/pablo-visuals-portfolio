import React from "react";
import { Slider, Card } from "../components/index";
import { projects, projectsTitle } from "../constants/content";
import { responsive } from "../responsive";

const Projects = () => {
  return (
    <section id="projects" className="section flex flex-col items-center justify-between h-[300px] sm:h-[400px] lg:h-[550px]">
      <div className="relative w-[70%] h-full">
        <Slider>
          {projects.map((project, index) => (
            <Card
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
