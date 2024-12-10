import React, { useState } from "react";
import projet1Image from "../image/gestionnaire_des_tache_comp.webp";
import projet2Image from "../image/portfolio.webp";
import projet3Image from "../image/work in progress.jpg";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Gestionnaire de tâches",
      description: "Application web pour gérer vos tâches quotidiennes.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "MySQL", icon: <FaDatabase /> },
      ],
      image: projet1Image,
    },
    {
      id: 2,
      title: "Portfolio",
      description: "Site vitrine personnel pour présenter mes compétences.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "CSS", icon: <FaNodeJs /> },
        { name: "JavaScript", icon: <FaReact /> },
      ],
      image: projet2Image,
    },
    {
      id: 3,
      title: "Auto-école",
      description: "Site en cours de développement pour une auto-école en ligne.",
      technologies: [
        { name: "React", icon: <FaReact /> },
        { name: "CSS", icon: <FaNodeJs /> },
        { name: "MySQL", icon: <FaDatabase /> },
      ],
      image: projet3Image,
    },
  ];

  const openPopup = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="section projects fade-in">
      <h2 className="section-title">Mes Projets</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => openPopup(project)}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index}>
                  {tech.icon} {tech.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <div className="popup-overlay" onClick={closePopup}>
          <div
            className="popup-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="popup-close" onClick={closePopup}>
              &times;
            </button>
            <img
              className="popup-image"
              src={selectedProject.image}
              alt={selectedProject.title}
            />
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.description}</p>
            <h4>Technologies utilisées :</h4>
            <ul>
              {selectedProject.technologies.map((tech, index) => (
                <li key={index}>{tech.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
