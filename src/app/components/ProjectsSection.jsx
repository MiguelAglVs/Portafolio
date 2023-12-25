"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import PaginationButton from "./PaginationButton";

const projectsData = [
  {
    id: 1,
    title: "Proyecto 1",
    description: "Descripción del proyecto 1",
    image: "/images/about-image.avif",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Proyecto 2",
    description: "Descripción del proyecto 2",
    image: "/images/about-image.avif",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Proyecto 3",
    description: "Descripción del proyecto 3",
    image: "/images/about-image.avif",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Proyecto 4",
    description: "Descripción del proyecto 4",
    image: "/images/about-image.avif",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Proyecto 5",
    description: "Descripción del proyecto 5",
    image: "/images/about-image.avif",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Proyecto 6",
    description: "Descripción del proyecto 6",
    image: "/images/about-image.avif",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  const handleTagChange = (newTag) => {
    setTag(newTag);
    setCurrentPage(1); // Resetear a la primera página al cambiar la etiqueta
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Mis proyectos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name="Todo"
          onClick={() => handleTagChange("All")}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={() => handleTagChange("Web")}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Mobile"
          onClick={() => handleTagChange("Mobile")}
          isSelected={tag === "Mobile"}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentProjects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            desciption={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center mt-4 gap-2">
          <button
            onClick={() => handlePageChange(1)}
            className="text-[#adb7be] border-slate-600 hover:border-white rounded-full border-2 px-6 py-3 tetx-xl cursor-pointer"
          >
            {"<<"}
          </button>
          {currentPage > 2 && (
            <PaginationButton
              number={currentPage - 2}
              onClick={handlePageChange}
              isSelected={false}
            />
          )}
          {currentPage > 1 && (
            <PaginationButton
              number={currentPage - 1}
              onClick={handlePageChange}
              isSelected={false}
            />
          )}
          <PaginationButton
            number={currentPage}
            onClick={handlePageChange}
            isSelected={true}
          />
          {currentPage < totalPages && (
            <PaginationButton
              number={currentPage + 1}
              onClick={handlePageChange}
              isSelected={false}
            />
          )}
          {currentPage < totalPages - 1 && (
            <PaginationButton
              number={currentPage + 2}
              onClick={handlePageChange}
              isSelected={false}
            />
          )}
          <button
            onClick={() => handlePageChange(totalPages)}
            className="text-[#adb7be] border-slate-600 hover:border-white rounded-full border-2 px-6 py-3 tetx-xl cursor-pointer"
          >
            {">>"}
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
