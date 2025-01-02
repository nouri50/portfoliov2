import React from "react";
import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <section id="services" className="section services fade-in">
      <Helmet>
        <title>Services de Nouri Morouche</title>
        <meta
          name="description"
          content="Découvrez mes services : création de sites modernes, optimisation SEO et assistance technique. Travaillons ensemble pour concrétiser vos projets web."
        />
        <link rel="canonical" href="https://nmoroucheportfolio.fr#services" />
      </Helmet>
      <h2 className="section-title">Mes Services</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>Développement Web</h3>
          <p>
            Création et développement de sites web modernes adaptés à vos
            besoins. Utilisation des technologies comme React.js, Symfony, et
            Node.js.
          </p>
        </div>
        <div className="service-card">
          <h3>SEO</h3>
          <p>
            Amélioration de la visibilité de votre site sur les moteurs de
            recherche grâce à des techniques avancées d'optimisation.
          </p>
        </div>
        <div className="service-card">
          <h3>Support Technique</h3>
          <p>
            Assistance pour vos projets en cours, maintenance des applications
            et résolution de problèmes techniques complexes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
