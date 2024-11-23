import React from 'react';
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
import '../Styles/NotFound.css';
import { Helmet } from 'react-helmet';

      <Helmet>
        <title>Page Introuvable - Portfolio</title>
        <meta name="description" content="La page que vous recherchez est introuvable." />
        <meta property="og:title" content="Page Introuvable - Portfolio" />
        <meta property="og:description" content="La page que vous recherchez est introuvable." />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/404" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/portfolio-thumbnail.png" />
        <link rel="canonical" href="https://nmoroucheportfolio.fr/404" />
      </Helmet>

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
