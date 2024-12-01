import React from 'react';
import { Helmet } from 'react-helmet'; 
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaSymfony, FaNodeJs, FaFigma, FaGitAlt } from 'react-icons/fa';
import { SiPostgresql, SiExpress, SiAxios, SiVisualstudiocode, SiJira, SiMysql } from 'react-icons/si';
import "../Styles/Experience.css";

function Experience() {
  return (
    <main className="experience-container">
      <Helmet>
        <title>Mon Parcours et Mes Compétences - Portfolio</title>
        <meta 
          name="description" 
          content="Explorez mon expérience professionnelle, ma formation et les outils technologiques que je maîtrise en tant que développeur web. Technologies : React, Node.js, MySQL." 
        />
        <meta 
          name="keywords" 
          content="expérience développeur web, React, Node.js, formation développeur web, MySQL, technologies, portfolio développeur" 
        />
        <meta name="author" content="Nouri Morouche" />
        <meta property="og:title" content="Expérience et Compétences de Nouri Morouche" />
        <meta property="og:description" content="Mon parcours, mes compétences en développement web et les outils technologiques maîtrisés." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/experience" />
        <meta property="og:image" content="https://nmoroucheportfolio.fr/images/experience-preview.png" />
      </Helmet>

      <section className="card">
        <h2>Expérience Professionnelle</h2>
        <p><strong>Stage en Développement Web - Insy2s</strong></p>
        <p><em>novembre 2023 - février 2024</em></p>
        <p>Travail sur un projet de développement web avec des technologies modernes.</p>
      </section>

      <section className="card">
        <h2>Formation</h2>
        <ul className="formation-content">
          <li><strong>Titre Professionnel Développeur Web et Web Mobile</strong> - AFCI (2022 - 2023)</li>
          <li><strong>Développement d'applications</strong> - Afpa-ROUBAIX (mars/avril 2022)</li>
          <li><strong>Incubateur Nurserie</strong> - M2i à distance (novembre 2022)</li>
        </ul>
      </section>

      <section className="card">
        <h2>Technologies et Outils Maîtrisés</h2>
        <article className="tech-section">
          <h3>Langages et Technologies</h3>
          <div className="tech-icons">
            <FaHtml5 className="tech-icon" title="HTML5" aria-label="HTML5" />
            <FaCss3Alt className="tech-icon" title="CSS3" aria-label="CSS3" />
            <FaJs className="tech-icon" title="JavaScript" aria-label="JavaScript" />
          </div>
        </article>
        <article className="tech-section">
          <h3>Frameworks</h3>
          <div className="tech-icons">
            <FaReact className="tech-icon" title="React" aria-label="React" />
            <FaSymfony className="tech-icon" title="Symfony" aria-label="Symfony" />
          </div>
        </article>
        <article className="tech-section">
          <h3>Bibliothèques</h3>
          <div className="tech-icons">
            <FaNodeJs className="tech-icon" title="Node.js" aria-label="Node.js" />
            <SiExpress className="tech-icon" title="Express.js" aria-label="Express.js" />
            <SiAxios className="tech-icon" title="Axios" aria-label="Axios" />
          </div>
        </article>
        <article className="tech-section">
          <h3>Bases de Données</h3>
          <div className="tech-icons">
            <SiMysql className="tech-icon" title="MySQL" aria-label="MySQL" />
            <SiPostgresql className="tech-icon" title="PostgreSQL" aria-label="PostgreSQL" />
          </div>
        </article>
        <article className="tech-section">
          <h3>Outils</h3>
          <div className="tech-icons">
            <FaFigma className="tech-icon" title="Figma" aria-label="Figma" />
            <SiJira className="tech-icon" title="Jira" aria-label="Jira" />
            <SiVisualstudiocode className="tech-icon" title="Visual Studio Code" aria-label="Visual Studio Code" />
            <FaGitAlt className="tech-icon" title="GitHub" aria-label="GitHub" />
          </div>
        </article>
      </section>
    </main>
  );
}

export default Experience;
