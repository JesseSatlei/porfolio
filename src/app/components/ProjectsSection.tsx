"use client"
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

interface ProjectData {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  projectUrl: string;
  codeUrl?: string;
}

const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Irroba E-commerce",
    description: "Sistema de E-commerce para todos os tipos de logistas",
    image: "/images/projects/1.png",
    tag: ["All", "Web", "Experiência"],
    projectUrl: "https://www.irroba.com.br/"
  },
  {
    id: 2,
    title: "Parceiros da Construção",
    description: "Sistema de Educação",
    image: "/images/projects/2.png",
    tag: ["All", "Web", "Experiência"],
    projectUrl: "https://www.parceirodaconstrucao.com.br/"
  },
  {
    id: 3,
    title: "Shopping",
    description: "Sistema geral para shopping com funcionalidades de pagamento de estacionamento, gerenciamento de notas fiscais e etc.",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile", "Experiência"],
    projectUrl: "https://play.google.com/store/apps/details?id=br.com.brmalls.customer.moocaplaza"
  },
  {
    id: 4,
    title: "Restaurante",
    description: "Pagina de compras para restaurante",
    image: "/images/projects/4.png",
    tag: ["All", "Pessoal", "Freela"],
    projectUrl: "https://google.com"
  },
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Portfólio de Projetos e Experiência Profissional
      </h2>
      <div className="flex flex-row justify-center items-center gap-2 text-white my-6">
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Experiência"
          onClick={handleTagChange}
          isSelected={tag === "Experiência"}
        />
        <ProjectTag
          name="Freela"
          onClick={handleTagChange}
          isSelected={tag === "Freela"}
        />
      </div>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            projectUrl={project.projectUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
