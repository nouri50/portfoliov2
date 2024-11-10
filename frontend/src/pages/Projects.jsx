import React from 'react';
import DOMPurify from 'dompurify';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import "../Styles/Project.css";
import projectImage1 from '../image/gestionnaire_des_tache.png';

function Project() {
  const sanitizedContent = (content) => {
    return { __html: DOMPurify.sanitize(content) };
  };

  return (
    <div className="content" dangerouslySetInnerHTML={sanitizedContent(`
      <div class="project-card project-card-gestionnaire">
        <div class="project-image">
          <img src="${projectImage1}" alt="Projet Gestionnaire de Tâches" />
        </div>
        <div class="project-details">
          <h2>Projet Gestionnaire de Tâches</h2>
          <p>Ce projet est un gestionnaire de tâches permettant la création, la modification, et la suppression de tâches. Développé avec les technologies suivantes :</p>
          <ul class="tech-list">
            <li><FaReact class="tech-icon" /> React pour l'interface utilisateur</li>
            <li><FaNodeJs class="tech-icon" /> Node.js et Express pour le back-end</li>
            <li><FaDatabase class="tech-icon" /> MySQL pour la base de données</li>
          </ul>
          <a href="https://github.com/nouri50/GESTIONNAIRE-de-tache-" target="_blank" rel="noopener noreferrer" class="project-link">Voir sur GitHub</a>
        </div>
      </div>
      <div class="project-card project-card-autoecole">
        <div class="project-image-placeholder">
          <p>Image à venir</p>
        </div>
        <div class="project-details">
          <h2>Projet Site Web Auto-école</h2>
          <p>Ce projet est prévu pour être un site web destiné à une auto-école, permettant de présenter les services, de gérer les inscriptions en ligne et de fournir des ressources aux élèves.</p>
          <ul class="tech-list">
            <li><FaReact class="tech-icon" /> React pour le front-end</li>
            <li><FaNodeJs class="tech-icon" /> Node.js pour le back-end</li>
            <li><FaDatabase class="tech-icon" /> MySQL pour la base de données</li>
          </ul>
          <p class="project-link">Lien GitHub à venir</p>
        </div>
      </div>
    `)} />
  );
}

export default Project;
