import React from "react";
import "../Styles/Project.css";
import { Helmet } from 'react-helmet-async';
import projectImage1 from "../image/gestionnaire_des_tache_comp.webp";
import projectImage2 from "../image/portfolio.webp";
import projectPlaceholder from "../image/placeholder.webp";

const projects = [
  {
    id: 1,
    title: "Portfolio Actuel - Nouri Morouche",
    description:
      "Ce site est conçu pour mettre en avant mes compétences et mes projets dans le développement web. Il est optimisé pour offrir une navigation fluide et un design moderne.",
    features: [
      "React pour une interface utilisateur dynamique",
      "SEO optimisé pour une meilleure visibilité",
      "Design responsive avec CSS pour tous les appareils",
    ],
    technologies: ["React.js", "Tailwind CSS", "MySQL"],
    image: projectImage2,
    link: "https://github.com/nouri50/portfoliov2",
  },
  {
    id: 2,
    title: "Nouvelle Version de Portfolio (en cours)",
    description:
      "Une version avancée de mon portfolio actuel, utilisant Next.js pour une meilleure performance et Tailwind CSS pour un design plus moderne.",
    features: [
      "Rendu côté serveur avec Next.js pour des performances optimales",
      "UI améliorée grâce à Tailwind CSS",
      "Conception axée sur une expérience utilisateur optimale",
    ],
    technologies: ["Next.js", "Tailwind CSS"],
    image: projectPlaceholder,
    link: null,
  },
  {
    id: 3,
    title: "Projet Gestionnaire de Tâches",
    description:
      "Un gestionnaire de tâches permettant la création, la modification et la suppression de tâches.",
    features: [
      "React pour l'interface utilisateur",
      "Node.js et Express pour le back-end",
      "MySQL pour la base de données",
    ],
    technologies: ["React.js", "Node.js", "MySQL"],
    image: projectImage1,
    link: "https://github.com/nouri50/GESTIONNAIRE-de-tache-",
  },
  {
    id: 4,
    title: "Projet Site Web Auto-école (en conception)",
    description:
      "Un site interactif conçu pour simplifier la gestion des services et des inscriptions pour une auto-école. Il permet de gérer efficacement les dossiers des élèves et les inscriptions.",
    features: [
      "Phase de conception en cours",
      "Gestion des utilisateurs et des dossiers des élèves",
      "Système d'inscription simplifié pour les élèves",
    ],
    technologies: ["React.js", "Node.js", "MySQL"],
    image: projectPlaceholder,
    link: null,
  },
];

function Projects() {
  return (
    <>
      <Helmet>
        <title>Mes Projets - Portfolio</title>
        <meta
          name="description"
          content="Découvrez mes projets en développement web, incluant un gestionnaire de tâches, un site pour une auto-école, et mon portfolio."
        />
        <meta property="og:title" content="Mes Projets - Portfolio" />
        <meta
          property="og:description"
          content="Une collection de projets démontrant mes compétences en React, Node.js, et bien plus."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://nmoroucheportfolio.fr/images/portfolio-thumbnail.png"
        />
        <link rel="canonical" href="https://nmoroucheportfolio.fr/projects" />
      </Helmet>
      <div className="projects-container">
        <h1 className="section-title">Mes Projets</h1>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`Illustration du projet ${project.title}`}
                />
              </div>
              <div className="project-content">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <ul className="project-features">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <p className="project-technologies">
                  <strong>Technologies utilisées :</strong>{" "}
                  {project.technologies.join(", ")}
                </p>
                {project.link ? (
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir sur GitHub
                  </a>
                ) : (
                  <p className="project-link-disabled">Lien GitHub à venir</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;

