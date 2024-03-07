import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Parcours() {
  return (
    <div>
    <h1>Mon Parcours</h1>
          <div className="experience">
            <h2>Expérience Professionnelle</h2>
            <div className="job">
              <h3>Stage en Développement Web - Insy2s</h3>
              <p>Date : novembre 2023 - fevrier 2024</p>
              <ul>
                <li>Travail sur un projets de développement web.</li>
              </ul>
            </div>
          </div>
          <div className="education">
            <h2>Formation</h2>
            <div className="degree">
              <h3>Titre Professionnel de Développeur Web et Web Mobile</h3>
              <p>Date : 2022 - 2023</p>
              <p>Institut : AFCI </p>
            </div>
          </div>
 
    </div>
  );
}

export default Parcours;
