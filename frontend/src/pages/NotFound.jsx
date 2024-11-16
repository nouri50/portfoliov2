import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import '../Styles/NotFound.css';

function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-header">
        <FaExclamationTriangle className="warning-icon" />
        <h1>404 - Page non trouvée</h1>
      </div>
      <p>La page que vous recherchez n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default NotFound;
