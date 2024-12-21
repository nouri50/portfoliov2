import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaReact, FaNodeJs, FaDatabase, FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";

// Importation des images
import project1Image from "../image/gestionnaire_des_tache_comp.webp";
import project2Image from "../image/portfolio.webp";
import project3Image from "../image/work_in_progress.jpg";

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
        "Une application web performante pour organiser vos tâches quotidiennes. Développée avec React et Node.js.",
      image: project1Image,
      technologies: [<FaReact />, <FaNodeJs />, <FaDatabase />],
      githubLink: "https://github.com/votre-utilisateur/gestionnaire-de-taches",
      dateCreated: "2023-01-15",
    },
    {
      id: 2,
      title: "1re Version Portfolio",
      description:
        "Un portfolio moderne et interactif pour présenter vos compétences et projets. Entièrement développé avec React.",
      image: project2Image,
      technologies: [<FaReact />],
      githubLink: "https://github.com/votre-utilisateur/portfolio",
      dateCreated: "2022-12-10",
    },
    {
      id: 3,
      title: "Blog Communautaire",
      description:
        "Un blog interactif pour publier et commenter des articles. Ce projet est en développement avec React, Node.js et MySQL.",
      image: project3Image,
      technologies: [<FaReact />, <FaNodeJs />, <FaDatabase />],
      githubLink: null,
      dateCreated: "2023-03-01",
    },
  ];

  const jsonLD = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": projects.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": project.githubLink || "https://nmoroucheportfolio.fr",
      "name": project.title,
      "description": project.description,
      "dateCreated": project.dateCreated,
    })),
  };

  return (
    <section id="projects" className="projects-section">
      {/* SEO via Helmet */}
      <Helmet>
        <title>Projets de Nouri Morouche</title>
        <meta
          name="description"
          content="Découvrez les projets réalisés par Nouri Morouche, développeur web spécialisé en React, Node.js et MySQL."
        />
        <script type="application/ld+json">{JSON.stringify(jsonLD)}</script>
      </Helmet>

      <h2>Mes Projets</h2>
      <div className="projects-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            {/* Image du projet */}
            <img
              src={project.image}
              alt={`Capture d'écran de ${project.title}`}
              className="project-image"
            />

            {/* Titre et description */}
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            {/* Icônes des technologies utilisées */}
            <div className="technologies-icons">
              <h4>Technologies utilisées :</h4>
              <div className="icons">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="icon">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Bouton pour afficher/masquer les détails */}
            <button
              className={`details-button ${
                activeProject === project.id ? "active" : ""
              }`}
              onClick={() => toggleDetails(project.id)}
            >
              {activeProject === project.id ? (
                <>
                  Masquer les détails <FaChevronUp />
                </>
              ) : (
                <>
                  Afficher les détails <FaChevronDown />
                </>
              )}
            </button>

            {/* Détails du projet */}
            {activeProject === project.id && (
              <div className="project-details">
                <p>{project.description}</p>
                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-link"
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
