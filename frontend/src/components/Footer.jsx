import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <p className="rights">© 2024 Nouri Morouche. Tous droits réservés.</p>
      <div className="footer-links">
        <a href="/politique" className="footer-link">Politique de confidentialité</a>
        <a href="https://github.com/ton-compte" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaGithub /> GitHub
        </a>
        <a href="https://linkedin.com/in/ton-compte" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaLinkedin /> LinkedIn
        </a>
        <Link to="/contact" className="footer-link">Me contacter</Link>
      </div>
    </footer>
  );
}

export default Footer;
