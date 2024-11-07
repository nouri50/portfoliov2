import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import About from './pages/Presentation.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';
import './Styles/Background.css'; // Assurez-vous que le fond est bien défini dans ce fichier CSS
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
function App() {
  const [showCookieBanner, setShowCookieBanner] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('cookiesAccepted') === 'true') {
      setShowCookieBanner(false);
    }
  }, []);

  const acceptCookies = () => {
    setShowCookieBanner(false);
    localStorage.setItem('cookiesAccepted', 'true');
  };

  return (
    <Router>
      <div className="background-container"> {/* Ce div contiendra le fond */}
        <div className="app-container">
          {showCookieBanner && (
            <div className="cookie-banner">
              <p>
                Ce site utilise des cookies pour améliorer votre expérience. En continuant à naviguer, vous acceptez leur utilisation.
              </p>
              <button onClick={acceptCookies}>Accepter</button>
            </div>
          )}
          <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/politique" element={<PrivacyPolicy />} /> {/* Ajoutez cette route pour la politique de confidentialité */}
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
