import React from 'react';
import logo from '../image/nouri morouche.png'; // Mettez à jour le chemin vers l'image
import '../Styles/Header.css'; // Assurez-vous que le fichier CSS est importé

function Header() {
  return (
    <header className="header-container">
      <img src={logo} alt="Logo de Nouri Morouche - Développeur Web" className="logo" />
      <nav className="nav-menu">
        <ul>
          <li><a href="/">Accueil</a></li>
          <li><a href="/about">À propos</a></li>
          <li><a href="/projects">Projets</a></li>
          <li><a href="/experience">Parcours</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
