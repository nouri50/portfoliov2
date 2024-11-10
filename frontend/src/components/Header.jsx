import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/nouri morouche.png'; // Importation directe de l'image
import '../Styles/Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo du site" className="logo" />
        </Link>
      </div>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/projects">Projets</Link></li>
          <li><Link to="/experience">Parcours</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
