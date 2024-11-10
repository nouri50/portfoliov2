

import React from 'react';
import DOMPurify from 'dompurify'; // Importer DOMPurify
import { Link } from 'react-router-dom';
import "../Styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <h1 className="landing-title">{DOMPurify.sanitize('Bienvenue sur Mon Portfolio')}</h1>
      <h2 className="intro-subtitle">
        {DOMPurify.sanitize('Découvrez mes projets, mon parcours et mon expertise en développement web.')}
      </h2>
      <div className="section-card">
        <h2>{DOMPurify.sanitize('Mes Projets')}</h2>
        <p>{DOMPurify.sanitize("Explorez mes projets pour voir ce que j'ai réalisé.")}</p>
        <Link to="/projects" className="landing-link">{DOMPurify.sanitize('Voir les Projets')}</Link>
      </div>
      <div className="section-card">
        <h2>{DOMPurify.sanitize('Services')}</h2>
        <p>{DOMPurify.sanitize('Découvrez les services que je propose, tels que le développement web, la création d\'applications, et plus encore.')}</p>
        <Link to="/service" className="landing-link">{DOMPurify.sanitize('Voir les Services')}</Link>
      </div>
      <div className="section-card">
        <h2>{DOMPurify.sanitize('Contactez-moi')}</h2>
        <p>{DOMPurify.sanitize('N\'hésitez pas à me contacter pour toute question ou projet.')}</p>
        <Link to="/contact" className="landing-link">{DOMPurify.sanitize('Me Contacter')}</Link>
      </div>
    </div>
  );
}

export default LandingPage;
