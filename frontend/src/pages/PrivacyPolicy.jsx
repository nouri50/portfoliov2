import React from 'react';
import "../Styles/privacyPolicy.css";
import { Helmet } from 'react-helmet';

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <Helmet>
        <title>Politique de Confidentialité - Portfolio</title>
        <meta name="description" content="Lisez notre politique de confidentialité pour en savoir plus sur la gestion de vos données avec Google Analytics." />
        <meta property="og:title" content="Politique de Confidentialité - Portfolio" />
        <meta property="og:description" content="Découvrez comment nous utilisons Google Analytics pour analyser et améliorer l'expérience utilisateur sur notre site." />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/politique" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/portfolio-thumbnail.png" />
        <link rel="canonical" href="https://nmoroucheportfolio.fr/politique" />
      </Helmet>

      <h1>Politique de Confidentialité</h1>
      <p>Votre confidentialité est importante pour nous. Voici comment nous collectons et utilisons les données sur ce site :</p>
      
      <h2>1. Données collectées</h2>
      <p>
        Nous utilisons Google Analytics pour analyser l’audience de notre site. Cela inclut la collecte de données anonymisées telles que :
      </p>
      <ul>
        <li>Les pages visitées,</li>
        <li>La durée des visites,</li>
        <li>Les appareils utilisés (ordinateur, smartphone, etc.).</li>
      </ul>
      
      <h2>2. Utilisation des données</h2>
      <p>
        Ces données nous permettent d'améliorer le contenu et l’expérience utilisateur sur le site. 
        Aucune donnée personnelle permettant de vous identifier directement (comme nom, email, adresse IP complète) n’est collectée.
      </p>
      
      <h2>3. Cookies</h2>
      <p>
        Google Analytics utilise des cookies pour collecter ces informations. Vous pouvez désactiver les cookies via les paramètres de votre navigateur si vous le souhaitez.
      </p>
      
      <h2>4. Contact</h2>
      <p>
        Pour toute question concernant cette politique ou vos données, n'hésitez pas à nous contacter par email.
      </p>
    </div>
  );
}

export default PrivacyPolicy;
