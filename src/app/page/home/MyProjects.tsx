import React from "react";
import { ProjectCard } from "./ProjectCard";

const myProjectsData = [
  {
    src: "/assets/expressoSaude.png",
    title: "Expresso Saúde",
    description:
      "Project created in the 1st semester of College. The project aims to facilitate the scheduling of appointments at the UBS (Basic Health Units) of São Lourenço da Mata.",
    technologies: ["HTML", "CSS", "PHP", "MySql", "Xampp"],
    link: "https://github.com/JuscelinoMamede01/expresso-saude-si-1",
  },
  {
    src: "/assets/laBasketeira.png",
    title: "La Basketeira",
    description: "NBA Jersey Registration Project for E-commerce",
    technologies: ["HTML", "CSS", "PHP", "MySql", "Xampp"],
    link: "https://github.com/JuscelinoMamede01/ProjetoNBA",
  },
  {
    src: "/assets/laBasketeira.png",
    title: "Projeto3",
    description: "desc3",
    technologies: ["Tecnologia 1", "Tecnologia 2", "Tecnologia 3"],
    link: "https://github.com/JuscelinoMamede01/expresso-saude-si-1",
  },
];

export const MyProjects = () => {
  return (
    <>
      <section
        id="my-project"
        className="bg-gray-900  flex flex-col  justify-evenly items-center p-4"
      >
        <h3
          className="mb-10 text-2xl font-extrabold tracking-tight leading-none text-gray-200 md:text-4xl lg:text-5xl "
          data-aos="flip-up"
        >
          My Projects
        </h3>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 ">
          {myProjectsData.map((projectsData) => (
            <ProjectCard key={projectsData.title} {...projectsData} />
          ))}
        </div>
      </section>
    </>
  );
};
