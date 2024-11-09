import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import "../Styles/Project.css";

function Project() {
  return (
    <div className="content">
      <div className="project">
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
      <div className="project">
        <div className="project-details">
          <h2>Projet Site Web Auto-école</h2>
          <p>Projet en cours de développement. Ce site web est destiné à une auto-école pour présenter ses services, permettre l'inscription en ligne, et fournir des ressources aux élèves.</p>
          <ul className="tech-list">
            <li>
              <FaReact className="tech-icon" /> React pour le front-end
            </li>
            <li>
              <FaNodeJs className="tech-icon" /> Node.js pour le back-end
            </li>
            <li>
              <FaDatabase className="tech-icon" /> CSS pour le style
            </li>
          </ul>
         
        </div>
      </div>
    </div>
  );
}

export default Project;
