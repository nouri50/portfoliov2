import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NotFound.css'; // Ajoutez du style si nécessaire

function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous recherchez n'existe pas.</p>
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
}

export default NotFound;
