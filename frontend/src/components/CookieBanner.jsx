import React, { useState, useEffect } from 'react';
import "../Styles/CookieBanner.css";

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    console.log('Consent:', consent);
    if (!consent) {
      setShowBanner(true);
      console.log('Banner shown');
    }
  }, []);
  
  if (!showBanner) {
    console.log('Banner hidden');
    return null;
  }
  

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner">
      <p>
        Ce site utilise des cookies pour améliorer votre expérience. En continuant, vous acceptez notre
        <a href="/politique" target="_blank" rel="noopener noreferrer"> politique de confidentialité</a>.
      </p>
      <button onClick={handleAccept}>J'accepte</button>
    </div>
  );
}

export default CookieBanner;
