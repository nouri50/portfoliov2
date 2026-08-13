import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaGithub, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { trackEvent } from "../utils/analytics"; // Suivi Google Analytics
import project1Image from "../image/gestionnaire_des_tache_comp.webp";
import project2Image from "../image/portfolio.webp";
import project3Image from "../image/blog.webp";

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const toggleDetails = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId);
  };

  const projects = [
    {
      id: 1,
      title: "Gestionnaire de tâches",
      description: "Une application performante pour organiser vos tâches quotidiennes.",
      technologies: [<FaReact />, <FaNodeJs />, <FaDatabase />],
      image: project1Image,
      githubLink: "https://github.com/nouri50/GESTIONNAIRE-de-tache-"
    },
    {
      id: 2,
      title: "Portfolio Personnel",
      description: "Un portfolio moderne et interactif pour présenter mes compétences et projets.",
      technologies: [<FaReact />],
      image: project2Image,
      githubLink: "https://github.com/nouri50/portfoliov2"
    },
    {
      id: 3,
      title: "Blog Communautaire",
      description: "Un blog interactif pour publier et commenter des articles.",
      technologies: [<FaReact />, <FaNodeJs />, <FaDatabase />],
      image: project3Image,
      githubLink: null // Pas encore disponible
    },
  ];

  return (
    <section id="projects" className="section projects">
      <Helmet>
        <title>Projets de Nouri Morouche | Développeur Web</title>
        <meta name="description" content="Découvrez les projets développés par Nouri Morouche, expert en React et Symfony." />
        
        {/* JSON-LD pour le référencement SEO des projets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Projets de Nouri Morouche",
            "description": "Liste des projets réalisés en React, Symfony et Node.js",
            "itemListElement": projects.map((project, index) => ({
              "@type": "CreativeWork",
              "position": index + 1,
              "name": project.title,
              "description": project.description,
              "url": project.githubLink || "https://nmoroucheportfolio.fr#projects"
            }))
          })}
        </script>
      </Helmet>

      <h2 className="section-title">Mes Projets</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={`Projet ${project.title}`} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <button className="details-button" onClick={() => toggleDetails(project.id)}>
              {activeProject === project.id ? "Masquer les détails" : "Voir les détails"}
            </button>

            {activeProject === project.id && (
              <div className="project-details">
                <h4>Technologies utilisées :</h4>
                <div className="technologies-icons">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx}>{tech}</span>
                  ))}
                </div>

                {project.githubLink ? (
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="github-link"
                    onClick={() => trackEvent("click", "Project", project.title)}
                  >
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
