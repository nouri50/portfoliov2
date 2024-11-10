// @ts-nocheck

import React from 'react';
import DOMPurify from 'dompurify'; // Importer DOMPurify
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPhp, FaSymfony, FaDatabase } from 'react-icons/fa';
import "../Styles/Experience.css";

function Parcours() {
  return (
    <div className="parcours-container">
      <h1>{DOMPurify.sanitize('Mon Parcours')}</h1>

      <div className="experience">
        <h2>{DOMPurify.sanitize('Expérience Professionnelle')}</h2>
        <div className="card">
          <h3>{DOMPurify.sanitize('Stage en Développement Web - Insy2s')}</h3>
          <p>{DOMPurify.sanitize('Date : novembre 2023 - février 2024')}</p>
          <ul>
            <li>{DOMPurify.sanitize('Travail sur un projet de développement web.')}</li>
          </ul>
          <div className="skills">
            <FaPhp className="skill-icon" />
            <FaSymfony className="skill-icon" />
            <FaDatabase className="skill-icon" />
          </div>
        </div>
      </div>

      <div className="formation">
        <h2>{DOMPurify.sanitize('Formation')}</h2>
        <div className="card">
          <h3>{DOMPurify.sanitize('Titre Professionnel de Développeur Web et Web Mobile')}</h3>
          <p>{DOMPurify.sanitize('Date : 2022 - 2023')}</p>
          <p>{DOMPurify.sanitize('Institut : AFCI')}</p>
          <div className="skills">
            <FaHtml5 className="skill-icon" />
            <FaCss3Alt className="skill-icon" />
            <FaJs className="skill-icon" />
            <FaReact className="skill-icon" />
            <FaPhp className="skill-icon" />
            <FaDatabase className="skill-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parcours;
