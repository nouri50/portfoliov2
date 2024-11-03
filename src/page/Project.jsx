
import React from 'react';
import "../Styles/Project.css";

function Project() {
  return (
    <div className="content">
      <div className="project">
        <div className="project-details">
          <h2>Projet E-commerce</h2>
          <p>projet de fin de formation </p>
          {/* Ajoutez des captures d'écran, des liens vers le code source, etc. */}
        </div>
        <div className="project-image">
          {/* Ajoutez une capture d'écran du projet e-commerce */}
        </div>
      </div>

      <div className="project">
        <div className="project-details">
          <h2>Formulaire Multistep</h2>
          <p>projet de stage </p>
          {/* Ajoutez des captures d'écran, des liens vers le code source, etc. */}
        </div>
        <div className="project-image">
          {/* Ajoutez une capture d'écran du formulaire multistep */}
        </div>
      </div>
    </div>
  );
}

export default Project;

