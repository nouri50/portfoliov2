import React, { useState } from "react";
import { FaGithub, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import project1Image from "../image/gestionnaire_des_tache_comp.webp";
import project2Image from "../image/portfolio.webp";
import project3Image from "../image/blog-communautaire.png";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleDetails = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  const projects = [
    {
      id: 1,
      title: "Gestionnaire de tâches",
      description:
        "Une application performante pour organiser vos tâches quotidiennes. Développée avec React et Node.js.",
      image: project1Image,
      githubLink: "https://github.com/nouri50/GESTIONNAIRE-de-tache-",
      technologies: [<FaReact />, <FaNodeJs />, <FaDatabase />],
    },
    {
      id: 2,
      title: "Portfolio Personnel",
      description:
        "Un portfolio moderne et interactif pour présenter mes compétences et projets. Développé avec React.",
      image: project2Image,
      githubLink: "https://github.com/nouri50/portfoliov2",
      technologies: [<FaReact />],
    },
    {
      id: 3,
      title: "Blog Communautaire",
      description:
        "Un blog interactif pour publier et commenter des articles. Ce projet est en développement avec React, Node.js et MySQL.",
      image: project3Image,
      githubLink: null, // Pas de lien GitHub pour ce projet
      technologies: [<FaReact />, <FaNodeJs />, <FaDatabase />],
    },
  ];

  return (
    <section id="projects" className="section projects">
      <h2>Mes Projets</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={`Capture d'écran de ${project.title}`} className="project-image" />
            <h3>{project.title}</h3>
            <button
              className="details-button"
              onClick={() => toggleDetails(project.id)}
            >
              {activeProject === project.id ? "Masquer les détails" : "En savoir plus"}
            </button>
            {activeProject === project.id && (
              <div className="project-details">
                <p>{project.description}</p>
                <div className="technologies-icons">
                  <h4>Technologies utilisées :</h4>
                  <div className="icons">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx}>{tech}</span>
                    ))}
                  </div>
                </div>
                {project.githubLink ? (
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                    <FaGithub /> Voir sur GitHub
                  </a>
                ) : (
                  <p className="github-link">Dépôt GitHub à venir</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
