import React from "react";
import { Helmet } from "react-helmet-async";
import { FaFileDownload, FaLinkedin, FaGithub, FaFacebook, FaShareAlt } from "react-icons/fa";
import profileImage  from '../image/photo-developpeur.jpg';
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
    <section id="landing-page" className="landing-page">
      <Helmet>
        <title>Bienvenue sur mon portfolio</title>
        <meta
          name="description"
          content="Découvrez mes compétences, mes projets et mon expérience professionnelle."
        />
        <link rel="canonical" href="https://nmoroucheportfolio.fr/#landing-page" />
      </Helmet>
      <div className="landing-content">
        <img src={profileImage} alt="Nouri Morouche, développeur web" className="landing-image" />
        <h1 className="landing-title">Bienvenue sur mon portfolio</h1>
        <p className="landing-description">
          Je suis un développeur passionné spécialisé dans la création de solutions digitales modernes.
        </p>
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
        <div className="social-buttons">
          <a
            href="https://www.linkedin.com/in/nouri-morouche"
            className="social-button linkedin"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/nouri50"
            className="social-button github"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61569434236598"
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
