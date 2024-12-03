import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import "../Styles/LandingPage.css";

// Import des images
import apercuProjet from "../image/aperçu service-comp.png";
import apercuService from "../image/aperçu service-comp.png";
import apercuContact from "../image/aperçu contacts-com.png";

function LandingPage() {
  const [preview, setPreview] = useState(null);

  const handlePreview = (image) => {
    setPreview(image);
  };

  const handleClosePreview = () => {
    setPreview(null);
  };

  return (
    <div className="landing-container">
      <Helmet>
        <title>Accueil - Portfolio de Nouri Morouche</title>
        <meta
          name="description"
          content="Bienvenue sur le portfolio de Nouri Morouche, développeur web. Découvrez mes projets, mes services et contactez-moi."
        />
        <meta
          name="keywords"
          content="Nouri Morouche, développeur web, portfolio, projets, services, contact"
        />
        <meta name="author" content="Nouri Morouche" />
        <meta property="og:title" content="Portfolio de Nouri Morouche - Accueil" />
        <meta
          property="og:description"
          content="Explorez les projets, services et compétences de Nouri Morouche en tant que développeur web."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/" />
        <meta
          property="og:image"
          content="https://nmoroucheportfolio.fr/images/portfolio-thumbnail.png"
        />
        <link rel="canonical" href="https://nmoroucheportfolio.fr/" />
      </Helmet>
      <h1 className="landing-title">Bienvenue sur Mon Portfolio</h1>
      <h2 className="intro-subtitle">
        Découvrez mes projets, services et expertise en développement web.
      </h2>

      <div className="cards-container">
        <div className="card">
          <div className="icon">💻</div>
          <h3>Mes Projets</h3>
          <p>
            Découvrez mes compétences en React, Tailwind et MySQL. Explorez mes
            réalisations qui mettent en valeur mon savoir-faire.
          </p>
          <button onClick={() => handlePreview(apercuProjet)}>Aperçu</button>
          <Link to="/projects" className="button-link">
            En savoir plus
          </Link>
        </div>

        <div className="card">
          <div className="icon">🔧</div>
          <h3>Services</h3>
          <p>
            Découvrez les services que je propose pour vos projets web modernes
            et interactifs.
          </p>
          <button onClick={() => handlePreview(apercuService)}>Aperçu</button>
          <Link to="/services" className="button-link">
            Voir les Services
          </Link>
        </div>

        <div className="card">
          <div className="icon">📧</div>
          <h3>Me Contacter</h3>
          <p>
            N'hésitez pas à me contacter pour discuter de vos idées ou besoins.
          </p>
          <button onClick={() => handlePreview(apercuContact)}>Aperçu</button>
          <Link to="/contact" className="button-link">
            Me Contacter
          </Link>
        </div>
      </div>

      {/* Modale pour l'aperçu */}
      {preview && (
        <div className="preview-modal" onClick={handleClosePreview}>
          <div className="preview-content">
            <img src={preview} alt="Aperçu" />
            <button className="close-button" onClick={handleClosePreview}>
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
