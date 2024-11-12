import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">
      <h1 className="landing-title">Bienvenue sur Mon Portfolio</h1>
      <h2 className="intro-subtitle">
        Découvrez mes projets, mon parcours et mon expertise en développement web.
      </h2>
      <div className="section-card">
        <h2>Mes Projets</h2>
        <p>Explorez mes projets pour voir ce que j'ai réalisé.</p>
        <Link to="/projects" className="landing-link">Voir les Projets</Link>
      </div>
      <div className="section-card">
        <h2>Services</h2>
        <p>Découvrez les services que je propose, tels que le développement web, la création d'applications, et plus encore.</p>
        <Link to="/services" className="landing-link">Voir les Services</Link>
      </div>
      <div className="section-card">
        <h2>Contactez-moi</h2>
        <p>N'hésitez pas à me contacter pour toute question ou projet.</p>
        <Link to="/contact" className="landing-link">Me Contacter</Link>
      </div>
    </div>
  );
}

export default LandingPage;
