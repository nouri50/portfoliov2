import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Assurez-vous de les utiliser si importés
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer>
      <p className="rights">© 2024 Nouri Morouche. Tous droits réservés.</p>
      <p>
        <a href="/politique" className="icon">Politique de Confidentialité</a> |
        <a href="https://github.com/ton-compte" target="_blank" rel="noopener noreferrer" className="icon">
          <FaGithub /> GitHub
        </a> |
        <a href="https://linkedin.com/in/ton-compte" target="_blank" rel="noopener noreferrer" className="icon">
          <FaLinkedin /> LinkedIn
        </a> |
        <a href="/contact" className="icon">Me contacter</a>
      </p>
    </footer>
  );
}

export default Footer;

