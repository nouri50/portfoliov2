import React, { useState } from 'react';
import '../Styles/Header.css'; // Importer le fichier CSS pour appliquer les styles
import './Presentation.jsx';
import './Parcour.jsx';
import logo from '../image/logo-dwwm.jpg'; // Importer l'image logo-dwwm.jpg
function Header() {
  const [isOpen, setIsOpen] = useState(false); 

  // Fonction pour basculer l'état du menu burger
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      {/* Logo */}
      <div className="logo">
        <img src={logo} alt="logo" />
        </div>
      
      {/* Menu burger */}
      <div className={`menu-burger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menu de navigation */}
      <nav className={`menu-items ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="presentation">À propos</a></li>
          <li><a href="parcour">Parcours</a></li>
          <li><a href="mes-projet.html">Projets</a></li>
          <li><a href="mes-services.html">Service</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;