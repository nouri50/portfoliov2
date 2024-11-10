import React from 'react';
import DOMPurify from 'dompurify';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../Styles/Footer.css';

function Footer() {
  const sanitizedContent = (content) => {
    return { __html: DOMPurify.sanitize(content) };
  };

  return (
    <footer className="footer-container" dangerouslySetInnerHTML={sanitizedContent(`
      <p class="rights">© 2024 Nouri Morouche. Tous droits réservés.</p>
      <div class="footer-links">
        <a href="/politique" class="footer-link">Politique de confidentialité</a>
        <a href="https://github.com/ton-compte" target="_blank" rel="noopener noreferrer" class="footer-link">
          <FaGithub /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/nouri-morouche-9a8237140/" target="_blank" rel="noopener noreferrer" class="footer-link">
          <FaLinkedin /> LinkedIn
        </a>
        <Link to="/contact" class="footer-link">Me contacter</Link>
      </div>
    `)} />
  );
}

export default Footer;
