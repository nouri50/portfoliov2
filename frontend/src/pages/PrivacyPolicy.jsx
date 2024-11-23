import React from 'react';
import "../Styles/privacyPolicy.css";
import { Helmet } from 'react-helmet';

      <Helmet>
        <title>Politique de Confidentialité - Portfolio</title>
        <meta name="description" content="Lisez notre politique de confidentialité pour en savoir plus sur la gestion de vos données." />
        <meta property="og:title" content="Politique de Confidentialité - Portfolio" />
        <meta property="og:description" content="Lisez notre politique de confidentialité pour en savoir plus sur la gestion de vos données." />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/politique" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/portfolio-thumbnail.png" />
        <link rel="canonical" href="https://nmoroucheportfolio.fr/politique" />
      </Helmet>

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
    <h1>Politique de Confidentialité</h1>
    <p>Votre confidentialité est importante pour nous. Sur ce site, nous ne collectons aucune donnée personnelle via des formulaires.</p>
    <p>Lorsque vous choisissez de nous contacter par email via un lien `mailto`, votre client de messagerie est utilisé et aucune information n'est stockée sur notre site ou serveur.</p>
    <p>Nous n'utilisons pas de cookies ou d'autres technologies de suivi pour collecter des informations personnelles.</p>
    <p>Pour toute question concernant cette politique, n'hésitez pas à nous contacter par email.</p>
  </div>
);
}



export default PrivacyPolicy;

