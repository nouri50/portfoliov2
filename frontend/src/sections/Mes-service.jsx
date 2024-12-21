import React from "react";
import { Helmet } from "react-helmet-async";

function Services() {
  return (
    <>
      <Helmet>
        <title>Services de Nouri Morouche | Développement Web et SEO</title>
        <meta
          name="description"
          content="Découvrez mes services : création de sites modernes, optimisation SEO et assistance technique. Travaillons ensemble pour concrétiser vos projets web."
        />
        <meta property="og:title" content="Services de Nouri Morouche" />
        <meta
          property="og:description"
          content="Je propose des services en développement web, optimisation SEO et support technique. Contactez-moi pour en savoir plus."
        />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/services" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://nmoroucheportfolio.fr/services" />
      </Helmet>

      <section id="services" className="section services fade-in">
        <h2 className="section-title">Mes Services</h2>
        <div className="services-container">
          <div className="service-card">
            <h3>Développement Web</h3>
            <p>
              Création et développement de sites web modernes adaptés à vos besoins. Utilisation des technologies comme React.js, Symfony, et Node.js.
            </p>
          </div>
          <div className="service-card">
            <h3>SEO</h3>
            <p>
              Amélioration de la visibilité de votre site sur les moteurs de recherche grâce à des techniques avancées d'optimisation.
            </p>
          </div>
          <div className="service-card">
            <h3>Support Technique</h3>
            <p>
              Assistance pour vos projets en cours, maintenance des applications et résolution de problèmes techniques complexes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
