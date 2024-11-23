import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import About from './pages/Presentation.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import NotFound from './pages/NotFound.jsx';
import CookieBanner from './components/CookieBanner.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Services from './pages/Mes-service.jsx';
import './Styles/Background.css';
import './reset/index.css';

// Fonction pour suivre les pages visitées avec Google Analytics
const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname,
      });
    }
  }, [location]);
};

function AppContent() {
  // Appel de la fonction de suivi des pages
  usePageTracking();

  return (
    <div className="background-container">
      <div className="app-container">
        <Header />
        <CookieBanner />
        <Routes>
          {/* Route d'accueil */}
          <Route path="/" element={<LandingPage />} />

          {/* Routes principales */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/politique" element={<PrivacyPolicy />} />
          <Route path="/services" element={<Services />} />

          {/* Gestion des erreurs */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;

