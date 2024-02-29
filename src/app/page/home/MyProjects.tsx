import React from "react";
import { ProjectCard } from "./ProjectCard";

export const MyProjects = () => {
  return (
    <>
      <section
        id="my-project"
        className="bg-gray-900  flex flex-col justify-evenly items-center p-4"
      >
        <h3
          className="mb-10 text-2xl font-extrabold tracking-tight leading-none text-gray-200 md:text-4xl lg:text-5xl "
          data-aos="flip-up"
        >
          My Projects
        </h3>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 ">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
    </>
  );
};
