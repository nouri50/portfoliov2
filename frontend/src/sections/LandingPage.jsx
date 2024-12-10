import React from "react";
import { FaLinkedin, FaGithub, FaFacebook, FaShareAlt } from "react-icons/fa";
import developerImage from "../image/photo-developpeur.jpg";

function LandingPage() {
  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Portfolio de Nouri Morouche",
          text: "Découvrez les projets et compétences de Nouri Morouche, développeur web.",
          url: window.location.href,
        })
        .then(() => console.log("Partage réussi"))
        .catch((error) => console.error("Erreur lors du partage :", error));
    } else {
      alert("Le partage n'est pas supporté sur ce navigateur.");
    }
  };

  return (
    <section id="accueil" className="section landing-page">
      <div className="landing-content">
        {/* Image du développeur */}
        <img
          src={developerImage}
          alt="Développeur Nouri Morouche"
          className="landing-image"
        />

        {/* Titre principal */}
        <h1 className="landing-title">Bienvenue sur mon portfolio</h1>

        {/* Description */}
        <p className="landing-description">
          Je suis un développeur spécialisé dans la création de sites modernes
          et performants.
        </p>

        {/* CTA : Voir les projets */}
        <a href="#projects" className="cta-button">
          Voir mes projets
        </a>

        {/* Boutons sociaux */}
        <div className="social-buttons">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/nouri-morouche-9a8237140/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button linkedin"
            aria-label="Profil LinkedIn de Nouri Morouche"
          >
            <FaLinkedin />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/nouri50"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button github"
            aria-label="Profil GitHub de Nouri Morouche"
          >
            <FaGithub />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61569434236598"
            target="_blank"
            rel="noopener noreferrer"
            className="social-button facebook"
            aria-label="Profil Facebook de Nouri Morouche"
          >
            <FaFacebook />
          </a>

          {/* Partage */}
          <button
            onClick={handleShare}
            className="social-button share"
            aria-label="Partager ce portfolio"
          >
            <FaShareAlt />
          </button>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
