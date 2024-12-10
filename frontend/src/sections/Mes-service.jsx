import React from "react";

function Services() {
  return (
    <section id="services" className="section services fade-in">
      <h2 className="section-title">Mes Services</h2>
      <div className="services-container">
        <div className="service-card">
          <h3>Développement Web</h3>
          <p>
            Création de sites web modernes et performants en utilisant React.js, Symfony, et d'autres frameworks.
          </p>
        </div>
        <div className="service-card">
          <h3>SEO</h3>
          <p>
            Optimisation pour améliorer la visibilité de votre site sur les moteurs de recherche.
          </p>
        </div>
        <div className="service-card">
          <h3>Support Technique</h3>
          <p>
            Assistance pour résoudre les problèmes techniques complexes et assurer la maintenance de vos applications.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
