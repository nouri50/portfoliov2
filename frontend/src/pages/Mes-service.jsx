import React from 'react';
import DOMPurify from 'dompurify'; // Importer DOMPurify
import "../Styles/mes-service.css";

function Services() {
  return (
    <div className="services-container">
      <h1 className="services-title">{DOMPurify.sanitize('Mes Services')}</h1>
      <div className="service-card">
        <h2>{DOMPurify.sanitize('Développement Web')}</h2>
        <p>{DOMPurify.sanitize('Je crée des sites web sur mesure, modernes et réactifs, utilisant les dernières technologies telles que React, HTML, CSS, et JavaScript.')}</p>
      </div>
      <div className="service-card">
        <h2>{DOMPurify.sanitize('Développement d\'Applications')}</h2>
        <p>{DOMPurify.sanitize('Je développe des applications web adaptées aux besoins de votre entreprise, intégrant des fonctionnalités spécifiques et des solutions backend robustes.')}</p>
      </div>
      <div className="service-card">
        <h2>{DOMPurify.sanitize('Optimisation SEO')}</h2>
        <p>{DOMPurify.sanitize('J\'optimise votre site pour qu\'il soit bien référencé sur les moteurs de recherche, en utilisant les meilleures pratiques SEO et en veillant à la performance globale.')}</p>
      </div>
      <div className="service-card">
        <h2>{DOMPurify.sanitize('Conseil et Support Technique')}</h2>
        <p>{DOMPurify.sanitize('Je vous accompagne tout au long de votre projet, offrant des conseils personnalisés et un support technique pour garantir la réussite de vos projets.')}</p>
      </div>
    </div>
  );
}

export default Services;
