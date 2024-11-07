import React from 'react';
import "../Styles/Experience.css";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPhp } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiSymfony, SiMysql } from "react-icons/si";

function Experience() {
  return (
    <div className="experience-container">
      <h1 className="experience-title">Mon Parcours</h1>

      {/* Carte pour l'expérience professionnelle */}
      <div className="experience-card">
        <h2>Expérience Professionnelle</h2>
        <div className="card-content">
          <h3>Stage en Développement Web - Insy2s</h3>
          <p>Date : novembre 2023 - février 2024</p>
          <ul>
            <li>Travail sur un projet de développement web.</li>
          </ul>
          {/* Logos des technologies utilisées */}
          <div className="tech-logos">
            <SiRedux className="tech-icon" />
            <SiTailwindcss className="tech-icon" />
            <FaPhp className="tech-icon" />
            <SiSymfony className="tech-icon" />
            <SiMysql className="tech-icon" />
          </div>
        </div>
      </div>

      {/* Carte pour la formation */}
      <div className="experience-card">
        <h2>Formation</h2>
        <div className="card-content">
          <h3>Titre Professionnel de Développeur Web et Web Mobile</h3>
          <p>Date : 2022 - 2023</p>
          <p>Institut : AFCI</p>
          {/* Logos des technologies enseignées */}
          <div className="tech-logos">
            <FaHtml5 className="tech-icon" />
            <FaCss3Alt className="tech-icon" />
            <FaJsSquare className="tech-icon" />
            <FaReact className="tech-icon" />
            <FaPhp className="tech-icon" />
            <SiMysql className="tech-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
