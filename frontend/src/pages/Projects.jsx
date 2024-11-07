import React from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa'; // Icônes pour React, Node.js, MySQL
import "../Styles/Project.css";

function Project() {
  return (
    <div className="content">
      {/* Projet Gestionnaire de Tâches */}
      <div className="project">
        <div className="project-details">
          <h2>Projet Gestionnaire de Tâches</h2>
          <p>Ce projet est un gestionnaire de tâches permettant la création, la modification, et la suppression de tâches. Développé avec les technologies suivantes :</p>
          <ul className="tech-list">
            <li>
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                <FaReact className="tech-icon" /> React pour l'interface utilisateur
              </a>
            </li>
            <li>
              <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                <FaNodeJs className="tech-icon" /> Node.js et Express pour le back-end
              </a>
            </li>
            <li>
              <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
                <FaDatabase className="tech-icon" /> MySQL pour la base de données
              </a>
            </li>
          </ul>
          <a href="https://github.com/ton-compte/projet-gestionnaire-de-taches" target="_blank" rel="noopener noreferrer" className="project-link">Voir sur GitHub</a>
        </div>
        <div className="project-image">
          <img src={require("../image/gestionnaire_des_tache.png")} alt="Projet Gestionnaire de Tâches" />
        </div>
      </div>

      {/* Projet Site Web Auto-école */}
      <div className="project">
        <div className="project-details">
          <h2>Projet Site Web Auto-école</h2>
          <p>Projet en cours de développement. Ce site web est destiné à une auto-école pour présenter ses services, permettre l'inscription en ligne, et fournir des ressources aux élèves. Technologies prévues :</p>
          <ul className="tech-list">
            <li>
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                <FaReact className="tech-icon" /> React pour le front-end
              </a>
            </li>
            <li>
              <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
                <FaNodeJs className="tech-icon" /> Node.js pour le back-end
              </a>
            </li>
            <li>
              <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank" rel="noopener noreferrer">
                <FaDatabase className="tech-icon" /> CSS pour le style
              </a>
            </li>
          </ul>
          <a href="https://github.com/ton-compte/projet-auto-ecole" target="_blank" rel="noopener noreferrer" className="project-link">Voir sur GitHub</a>
        </div>
        <div className="project-image">
          {/* Ajoutez une image ici si nécessaire */}
        </div>
      </div>
    </div>
  );
}

export default Project;
