import React, { useState, useEffect } from 'react';
import '../Styles/CookieBanner.css';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  // Vérifiez les préférences utilisateur lors du montage du composant
  useEffect(() => {
    const cookiesPreference = localStorage.getItem('cookiesPreference');
    if (!cookiesPreference) {
      setShowBanner(true); // Affiche la bannière si aucune préférence n'est enregistrée
    }
  }, []);

  // Fonction pour accepter les cookies
  const acceptCookies = () => {
    savePreference('accepted');
    activateGoogleAnalytics();
    setShowBanner(false);
  };

  // Fonction pour refuser les cookies
  const refuseCookies = () => {
    savePreference('refused');
    setShowBanner(false);
  };

  // Sauvegarder la préférence utilisateur dans le localStorage
  const savePreference = (preference) => {
    localStorage.setItem('cookiesPreference', preference);
  };

  // Charger Google Analytics si les cookies sont acceptés
  const activateGoogleAnalytics = () => {
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-72S8X47T2F`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-72S8X47T2F');
  };

  if (!showBanner) return null;

  return (
    <>
      <div className="cookie-banner-overlay"></div>
      <div className="cookie-banner">
        <p>
          Ce site utilise des cookies pour améliorer votre expérience. En
          continuant, vous acceptez leur utilisation.
        </p>
        <div className="cookie-buttons">
          <button onClick={acceptCookies}>Accepter</button>
          <button onClick={refuseCookies}>Refuser</button>
        </div>
      </div>
    </>
  );
};

export default CookieBanner;
