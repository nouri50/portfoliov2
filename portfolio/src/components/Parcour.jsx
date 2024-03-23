import React from 'react';
import { useSpring, animated } from 'react-spring';
import { FaPhp, FaDatabase, FaReact, FaSymfony } from 'react-icons/fa'; // Import des icônes
import experienceLogo from '../image/experience-logo.png'; // Logo pour l'expérience professionnelle
import formationLogo from '../image/formation-logo.png'; // Logo pour la formation
import "../Styles/Parcour.css"; // Import du fichier CSS

function Parcours() {
  // Définissez les animations pour les logos
  const experienceLogoAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });
  const formationLogoAnimation = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 400 });

  return (
    <div className="parcours-container">
      <h1 className="parcours-title">Mon Parcours</h1>
      <div className="experience">
        <animated.img src={experienceLogo} style={experienceLogoAnimation} alt="Logo Expérience" className="logo" />
        <h2>Expérience Professionnelle</h2>
        <div className="job">
          <h3>Stage en Développement Web - Insy2s</h3>
          <p>Date : novembre 2023 - février 2024</p>
          <ul>
            <li>Travail sur un projet de développement web.</li>
          </ul>
        </div>
      </div>
      <div className="education">
        <animated.img src={formationLogo} style={formationLogoAnimation} alt="Logo Formation" className="logo" />
        <h2>Formation</h2>
        <div className="degree">
          <h3>Titre Professionnel de Développeur Web et Web Mobile</h3>
          <p>Date : 2022 - 2023</p>
          <p>Institut : AFCI </p>
        </div>
      </div>
      <div className="skills">
        <h2>Compétences</h2>
        <p>Maîtrise des technologies :</p>
        <ul className="skills-list">
          <li><FaPhp className="icon" /> PHP</li>
          <li><FaDatabase className="icon" /> MySQL</li>
          <li><FaReact className="icon" /> React</li>
          <li><FaSymfony className="icon" /> Symfony</li>
        </ul>
      </div>
    </div>
  );
}

export default Parcours;
