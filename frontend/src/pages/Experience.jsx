import React from 'react';
import { Helmet } from 'react-helmet'; 
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSymfony, FaNodeJs, FaFigma, FaGitAlt } from 'react-icons/fa';
import { SiPostgresql, SiExpress, SiAxios, SiVisualstudiocode, SiJira, SiMysql } from 'react-icons/si';
import "../Styles/Experience.css";

function Experience() {
  return (
    <div className="experience-container">
      <Helmet>
        <title>Mon Parcours et Mes Compétences - Portfolio</title>
        <meta name="description" content="Découvrez mon expérience professionnelle, ma formation et les technologies ainsi que les outils que je maîtrise en tant que développeur web." />
        <meta name="keywords" content="expérience professionnelle, formation, compétences, développeur web, technologies, outils, React, Node.js, MySQL, portfolio" />
      </Helmet>

      <div className="card">
        <h2>Expérience Professionnelle</h2>
        <p>Stage en Développement Web - Insy2s</p>
        <p>Date : novembre 2023 - février 2024</p>
        <p>Travail sur un projet de développement web.</p>
      </div>

      <div className="card">
        <h2>Formation</h2>
        <p>Titre Professionnel de Développeur Web et Web Mobile</p>
        <p>Date : 2022 - 2023</p>
        <p>Institut : AFCI</p>
        <p>Juin 2023 - titre pro développeur web et web mobile, AFCI-LIEVIN</p>
        <p>Mars/Avril 2022 - MS Développement d'application, Afpa-ROUBAIX</p>
        <p>Novembre 2022 - Incubateur nurserie, m2i à distance</p>
      </div>

      <div className="card">
        <h2>Technologies et Outils Maîtrisés</h2>
        <div className="tech-section">
          <h3>Langages et Technologies</h3>
          <div className="tech-icons">
            <FaHtml5 className="tech-icon" title="HTML5" />
            <FaCss3Alt className="tech-icon" title="CSS3" />
            <FaJs className="tech-icon" title="JavaScript" />
          </div>
        </div>
        <div className="tech-section">
          <h3>Frameworks</h3>
          <div className="tech-icons">
            <FaReact className="tech-icon" title="React" />
            <FaSymfony className="tech-icon" title="Symfony" />
          </div>
        </div>
        <div className="tech-section">
          <h3>Bibliothèques</h3>
          <div className="tech-icons">
            <FaNodeJs className="tech-icon" title="Node.js" />
            <SiExpress className="tech-icon" title="Express.js" />
            <SiAxios className="tech-icon" title="Axios" />
          </div>
        </div>
        <div className="tech-section">
          <h3>Bases de Données</h3>
          <div className="tech-icons">
            <SiMysql className="tech-icon" title="MySQL" />
            <SiPostgresql className="tech-icon" title="PostgreSQL" />
          </div>
        </div>
        <div className="tech-section">
          <h3>Outils</h3>
          <div className="tech-icons">
            <FaFigma className="tech-icon" title="Figma" />
            <SiJira className="tech-icon" title="Jira" />
            <SiVisualstudiocode className="tech-icon" title="Visual Studio Code" />
            <FaGitAlt className="tech-icon" title="GitHub" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
