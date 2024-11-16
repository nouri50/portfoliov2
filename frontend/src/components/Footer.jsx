import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <p className="rights">© 2024 Nouri Morouche. Tous droits réservés.</p>
      <div className="footer-links">
        <a href="/politique" className="footer-link">Politique de confidentialité</a>
        <a href="https://github.com/nouri50" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/nouri-morouche-9a8237140/" target="_blank" rel="noopener noreferrer" className="footer-link">
          <FaLinkedin /> LinkedIn
        </a>
        </div>
    </footer>
  );
}

export default Footer;
