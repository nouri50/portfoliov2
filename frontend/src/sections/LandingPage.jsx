import React from "react";
import {  FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { trackEvent } from "../utils/analytics";
import profileImage from "../image/photo-developpeur.webp";

function LandingPage() {
  
  const handleSocialClick = (platform) => trackEvent("click", "Social Link", platform);

  return (
    <section id="landing-page" className="landing-page" aria-label="Présentation de Nouri Morouche">
      <div className="landing-content">
        <img src={profileImage} alt="Nouri Morouche, développeur web" className="landing-image" loading="lazy" />
        <h1 className="landing-title">Bienvenue sur mon portfolio</h1>
        <p className="landing-description">
          Je suis un développeur passionné spécialisé dans la création de solutions digitales modernes.
        </p>
        
       
      
        <div className="social-buttons">
          <a href="https://www.linkedin.com/in/nouri-morouche" className="social-button linkedin" target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick("LinkedIn")}>
            <FaLinkedin />
          </a>
          <a href="https://github.com/nouri50" className="social-button github" target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick("GitHub")}>
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61569434236598" className="social-button facebook" target="_blank" rel="noopener noreferrer" onClick={() => handleSocialClick("Facebook")}>
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
