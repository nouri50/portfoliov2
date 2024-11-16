import React from 'react';
import "../Styles/privacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <h1>Politique de Confidentialité</h1>
      <p>Votre confidentialité est importante pour nous. Ce document explique quelles données personnelles nous collectons et comment elles sont utilisées.</p>
      <h2>Données collectées</h2>
      <p>Les données personnelles collectées via le formulaire de contact incluent le nom, l'email et le message.</p>
      <h2>Utilisation des données</h2>
      <p>Ces données sont utilisées uniquement pour répondre aux demandes de contact.</p>
      <h2>Droits des utilisateurs</h2>
      <p>Vous avez le droit de demander l'accès, la modification ou la suppression de vos données personnelles.</p>
      <h2>Durée de conservation</h2>
      <p>Les données sont conservées uniquement pour la durée nécessaire pour répondre aux demandes de contact.</p>
    </div>
  );
}

export default PrivacyPolicy;

