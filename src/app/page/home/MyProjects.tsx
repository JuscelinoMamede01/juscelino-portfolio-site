import React from "react";
import { ProjectCard } from "./ProjectCard";

export const MyProjects = () => {
  return (
    <>
      <section className="bg-gray-900  flex flex-col justify-evenly items-center md:p-4">
        <h3
          className="mb-10 text-2xl font-extrabold tracking-tight leading-none text-gray-200 md:text-4xl lg:text-5xl "
          data-aos="flip-up"
        >
          My Projects
        </h3>
        <div className="grid grid-cols-3 gap-10 ">
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
