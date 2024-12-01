import React, { useState } from "react";
import { Link } from "react-router-dom";
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
