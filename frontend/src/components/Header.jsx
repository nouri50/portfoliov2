import React from "react";
import { Link } from "react-scroll";
import logo from "../image/nouri-morouche_comp.webp";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="Logo" className="header-logo" />
        <nav>
          <ul className="header-nav">
            <li>
              <Link to="accueil" smooth={true} duration={500} aria-label="Accueil">
                Accueil
              </Link>
            </li>
            <li>
              <Link to="parcours" smooth={true} duration={500} aria-label="Parcours">
                Parcours
              </Link>
            </li>
            <li>
              <Link to="services" smooth={true} duration={500} aria-label="Services">
                Services
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} aria-label="Projets">
                Projets
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} aria-label="Contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
