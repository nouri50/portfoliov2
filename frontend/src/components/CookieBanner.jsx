import React, { useState } from 'react';
import '../Styles/CookieBanner.css'

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(true);

  const acceptCookies = () => {
    // Activez Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-72S8X47T2F');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>Ce site utilise des cookies pour améliorer votre expérience. En continuant, vous acceptez leur utilisation.</p>
      <button onClick={acceptCookies}>Accepter</button>
    </div>
  );
};

export default CookieBanner;
