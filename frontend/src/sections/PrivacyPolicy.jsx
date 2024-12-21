import React, { useState } from "react";
import "./CookieBanner.css";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    // Logique pour gérer le consentement
    console.log("Cookies acceptés");
    setIsVisible(false);
  };

  const handleRefuse = () => {
    // Logique pour gérer le refus
    console.log("Cookies refusés");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cookie-banner" role="dialog" aria-labelledby="cookie-banner-title">
      <h2 id="cookie-banner-title">Votre confidentialité nous tient à cœur</h2>
      <p>
        Nous utilisons des cookies pour analyser le trafic et améliorer votre expérience.
        En cliquant sur "Accepter", vous consentez à leur utilisation. Pour plus de détails, 
        consultez notre <a href="/politique" className="cookie-link">Politique de Confidentialité</a>.
      </p>
      <div className="cookie-buttons">
        <button className="accept-button" onClick={handleAccept}>
          Accepter
        </button>
        <button className="refuse-button" onClick={handleRefuse}>
          Refuser
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
