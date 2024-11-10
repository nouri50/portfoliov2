import React from 'react';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';
import logo from '../image/nouri morouche.png';
import '../Styles/Header.css';

function Header() {
  const sanitizedContent = (content) => {
    return { __html: DOMPurify.sanitize(content) };
  };

  return (
    <header className="header-container" dangerouslySetInnerHTML={sanitizedContent(`
      <div class="logo-container">
        <Link to="/">
          <img src="${logo}" alt="Logo du site" class="logo" />
        </Link>
      </div>
      <nav class="nav-menu">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/about">À propos</Link></li>
          <li><Link to="/projects">Projets</Link></li>
          <li><Link to="/experience">Parcours</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    `)} />
  );
}

export default Header;
