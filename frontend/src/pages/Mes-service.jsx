import React from 'react';
import { Helmet } from 'react-helmet-async';
import '../Styles/mes-service.css';

function Services() {
  return (
    <div className="services-container">
      <Helmet>
        <title>Services - Portfolio Nouri Morouche</title>
        <meta
          name="description"
          content="Découvrez les services proposés par Nouri Morouche : développement web, applications sur mesure, optimisation SEO et support technique."
        />
        <meta
          name="keywords"
          content="services développement web, applications web, SEO, support technique, React, Node.js, MySQL"
        />
        <meta name="author" content="Nouri Morouche" />
        <meta property="og:title" content="Services de Nouri Morouche" />
        <meta
          property="og:description"
          content="Découvrez les services proposés pour répondre à vos besoins en développement web et optimiser votre présence en ligne."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/services" />
        <meta property="og:image" content="https://nmoroucheportfolio.fr/images/services-thumbnail.png" />
        <link rel="canonical" href="https://nmoroucheportfolio.fr/services" />
      </Helmet>
      <h1 className="services-title">MES SERVICES</h1>
      <div className="services-list">
        {/* Développement Web */}
        <div className="service-card">
          <h2>Développement Web</h2>
          <p>
            Je conçois des sites web modernes, sur mesure, et optimisés pour offrir des performances élevées. Grâce aux technologies avancées comme <strong>React</strong>, <strong>HTML</strong>, et <strong>CSS</strong>, je crée des interfaces engageantes et intuitives qui captivent vos utilisateurs. Que vous ayez besoin d’un site vitrine ou d’une plateforme interactive, je m’assure qu’il soit fonctionnel, esthétique et adapté à vos besoins.
          </p>
          <p>Prenez les devants. Faites de votre site web un outil puissant pour votre activité.</p>
        </div>

        {/* Développement d'Applications */}
        <div className="service-card">
          <h2>Développement d'Applications</h2>
          <p>
            Transformez vos idées en applications web performantes et adaptées à vos besoins spécifiques. Je développe des solutions robustes et évolutives, combinant un backend solide avec des fonctionnalités sur mesure. Que ce soit pour des outils de gestion, des portails clients ou des plateformes internes, j’utilise des technologies modernes comme <strong>Node.js</strong>, <strong>Express</strong> et <strong>MySQL</strong> pour garantir la fiabilité et la sécurité de vos projets.
          </p>
          <p>Faites le premier pas vers l’innovation. Collaborons dès aujourd’hui.</p>
        </div>

        {/* Optimisation SEO */}
        <div className="service-card">
          <h2>Optimisation SEO</h2>
          <p>
            Un site performant ne suffit pas, il doit aussi être visible. J'optimise votre site web pour qu’il atteigne les meilleurs classements sur Google et attire des visiteurs qualifiés. Grâce à une stratégie SEO bien pensée, incluant une structure optimisée, des contenus pertinents, et des performances accrues, je m’assure que votre site génère du trafic et augmente vos conversions.
          </p>
          <p>Boostez votre visibilité. Offrez à votre site une place de choix dans les résultats de recherche.</p>
        </div>

        {/* Conseil et Support Technique */}
        <div className="service-card">
          <h2>Conseil et Support Technique</h2>
          <p>
            Chaque projet web est unique, tout comme les défis qu’il peut présenter. Je vous accompagne à chaque étape de votre projet, en vous offrant des conseils personnalisés et un support technique adapté. Que ce soit pour résoudre des problèmes techniques complexes ou optimiser vos solutions existantes, je suis là pour garantir le succès de vos initiatives.
          </p>
          <p>Travaillons ensemble. Construisons une solution qui répond parfaitement à vos objectifs.</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
