import React from "react";
import { FaFileDownload, FaLinkedin, FaGithub, FaFacebook, FaShareAlt } from "react-icons/fa";
import profileImage from "../image/photo-developpeur.jpg"; // Chemin vers l'image de profil

function LandingPage() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Portfolio de Nouri Morouche",
          text: "Découvrez mon portfolio de développeur web !",
          url: window.location.href,
        })
        .then(() => console.log("Partage réussi"))
        .catch((error) => console.error("Erreur de partage :", error));
    } else {
      alert("La fonction de partage n'est pas prise en charge sur votre navigateur.");
    }
  };

  return (
    <section id="welcome" className="landing-page">
      <div className="landing-content">
        {/* Image du profil */}
        <img src={profileImage} alt="Nouri Morouche, développeur web" className="landing-image" />

        {/* Titre principal */}
        <h1 className="landing-title">Bienvenue sur mon portfolio</h1>

        {/* Description */}
        <p className="landing-description">
          Je suis un développeur passionné spécialisé dans la création de solutions digitales modernes et performantes.
          Découvrez mes compétences, mes projets et mon expérience professionnelle.
        </p>

        {/* Boutons CTA */}
        <div className="cta-container">
          <a
            href="/assets/Cv de nouri-morouche développeur web et web mobile.pdf"
            download="NouriMorouche_CV.pdf"
            className="cta-button"
          >
            <FaFileDownload /> Télécharger mon CV
          </a>
          <a href="#projects" className="cta-link">
            Voir mes projets
          </a>
        </div>

        {/* Boutons sociaux */}
        <div className="social-buttons">
          <a
            href="https://www.linkedin.com"
            className="social-button linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            className="social-button github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com"
            className="social-button facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <button className="social-button share" onClick={handleShare}>
            <FaShareAlt />
          </button>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
