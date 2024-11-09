import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Header.css';

function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <Link to="/">
          <img src="/path/to/logo.png" alt="Logo du site" className="logo" />
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
