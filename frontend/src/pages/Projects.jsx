import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import "../Styles/Project.css";

// Import de l'image pour le projet existant
import projectImage1 from '../image/gestionnaire_des_tache_comp.webp'; // Chemin de l'image du projet 1

function Project() {
  return (
    <div className="content">
      {/* Carte pour le projet de gestionnaire de tâches */}
      <div className="project-card project-card-gestionnaire">
        <div className="project-image">
          <img src={projectImage1} alt="Projet Gestionnaire de Tâches" />
        </div>
        <div className="project-details">
          <h2>Projet Gestionnaire de Tâches</h2>
          <p>Ce projet est un gestionnaire de tâches permettant la création, la modification, et la suppression de tâches. Développé avec les technologies suivantes :</p>
          <ul className="tech-list">
            <li>
              <FaReact className="tech-icon" /> React pour l'interface utilisateur
            </li>
            <li>
              <FaNodeJs className="tech-icon" /> Node.js et Express pour le back-end
            </li>
            <li>
              <FaDatabase className="tech-icon" /> MySQL pour la base de données
            </li>
          </ul>
          <a href="https://github.com/nouri50/GESTIONNAIRE-de-tache-" target="_blank" rel="noopener noreferrer" className="project-link">Voir sur GitHub</a>
        </div>
      </div>

      {/* Carte pour le projet en développement */}
      <div className="project-card project-card-autoecole">
        <div className="project-image-placeholder">
          <p>Image à venir</p>
        </div>
        <div className="project-details">
          <h2>Projet Site Web Auto-école</h2>
          <p>Ce projet est prévu pour être un site web destiné à une auto-école, permettant de présenter les services, de gérer les inscriptions en ligne et de fournir des ressources aux élèves.</p>
          <ul className="tech-list">
            <li>
              <FaReact className="tech-icon" /> React pour le front-end
            </li>
            <li>
              <FaNodeJs className="tech-icon" /> Node.js pour le back-end
            </li>
            <li>
              <FaDatabase className="tech-icon" /> MySQL pour la base de données
            </li>
          </ul>
          <p className="project-link">Lien GitHub à venir</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
