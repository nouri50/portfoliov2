import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import "../Styles/contact.css";

function ContactPage() {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contactez-moi - Mon Portfolio</title>
        <meta name="description" content="Contactez-moi pour discuter de projets, collaborations ou toute autre question." />
        <meta name="keywords" content="portfolio, contact, développeur web" />
        <meta name="author" content="Nouri Morouche" />
      </Helmet>
      
      <h2 className="contact-title">Contactez-moi</h2>
      <p>Pour toute question ou collaboration, n'hésitez pas à m'envoyer un email en cliquant sur le lien ci-dessous.</p>
      <a href="mailto:nourimorouche@sfr.fr" className="mailto-link">Envoyer un email</a>

      <div className="contact-links">
        <Link to="/">Retour à l'accueil</Link>
        <Link to="/politique">Politique de confidentialité</Link>
      </div>
    </div>
  );
}

export default ContactPage;
