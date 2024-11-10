import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import "../Styles/CookieBanner.css";

function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="cookie-banner" dangerouslySetInnerHTML={DOMPurify.sanitize(`
      <p>Ce site utilise des cookies pour améliorer votre expérience. En continuant, vous acceptez notre
        <a href="/politique" target="_blank" rel="noopener noreferrer"> politique de confidentialité</a>.
      </p>
    `)}>
      <button onClick={handleAccept}>J'accepte</button>
    </div>
  );
}

export default CookieBanner;
