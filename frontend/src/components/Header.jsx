import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/nouri-morouche_comp.webp';
import logoSecours from '../image/nouri morouche.png'; // Image de secours
import '../Styles/Header.css';

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const [logoSrc, setLogoSrc] = useState(logo);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  const handleImageError = () => {
    setLogoSrc(logoSecours); // Image de secours si l'image principale échoue
  };

  return (
    <header className={`header-container ${menuActive ? 'menu-active' : ''}`}>
      <div className="logo-container">
        <Link to="/" onClick={closeMenu}>
          <img 
            src={logoSrc} 
            alt="Logo du site" 
            className="logo" 
            onError={handleImageError}
          />
        </Link>
      </div>
      <nav className={`nav-menu ${menuActive ? 'active' : ''}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Accueil</Link></li>
          <li><Link to="/about" onClick={closeMenu}>À propos</Link></li>
          <li><Link to="/projects" onClick={closeMenu}>Projets</Link></li>
          <li><Link to="/experience" onClick={closeMenu}>Parcours</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </nav>
      <div className="burger-menu" onClick={toggleMenu}>
        <div className={`line ${menuActive ? 'open' : ''}`}></div>
        <div className={`line ${menuActive ? 'open' : ''}`}></div>
        <div className={`line ${menuActive ? 'open' : ''}`}></div>
      </div>
    </header>
  );
}

export default Header;

