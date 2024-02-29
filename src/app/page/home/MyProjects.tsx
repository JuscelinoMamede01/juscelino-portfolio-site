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
    description:
      "NBA Jersey Registration Project for E-commerce. A streamlined and secure platform for NBA fans to register and purchase authentic jerseys online.",
    technologies: ["HTML", "CSS", "PHP", "MySql", "Xampp"],
    link: "https://github.com/JuscelinoMamede01/ProjetoNBA",
  },
  {
    src: "/assets/LeadBoost.png",
    title: "LeadBoost",
    description:
      "The FICR LeadBoost System is a powerful tool that drives the company's commercial success, increasing the conversion of leads into enrollments.",
    technologies: ["HTML", "CSS", "Bootstrap", "JS"],
    link: "https://lead-boost.vercel.app/",
  },
  {
    src: "/assets/sinagoga.png",
    title: "Recife's Synagogue",
    description:
      "The Kahal Zur Israel Synagogue, also known as the Rock of Israel Congregation Synagogue, is historically significant for being the first synagogue in the Americas. It is located in Recife, Brazil.",
    technologies: ["HTML", "CSS", "JS"],
    link: "https://sinagogarecife.vercel.app/",
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
