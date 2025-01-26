import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import useScrollAnimation from "./hooks/useScrollAnimation";
import Header from "./components/Header";
import LandingPage from "./sections/LandingPage.jsx";
import Parcours from "./sections/parcour.jsx";
import Services from "./sections/Mes-service.jsx";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import PopupBanner from "./utils/CookieBanner.jsx";
import PrivacyPolicy from "./sections/PrivacyPolicy.jsx"; // Import de la politique de confidentialité
import "./Styles/global.css";
import { initGoogleAnalytics, trackPageView } from "./utils/analytics"; // Fichier utils pour Analytics

// Composant pour suivre les changements de route et envoyer les données à Google Analytics
const GoogleAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

function App() {
  useScrollAnimation();

  useEffect(() => {
    initGoogleAnalytics("G-72S8X47T2F"); // Remplacez par votre propre ID de mesure Google Analytics
  }, []);

  return (
    <Router>
      <GoogleAnalyticsTracker /> {/* Composant pour suivre les changements de pages */}
      <div className="App">
        <PopupBanner />
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="fade-in-section">
                    <LandingPage />
                  </div>
                  <div className="fade-in-section">
                    <Parcours />
                  </div>
                  <div className="fade-in-section">
                    <Services />
                  </div>
                  <div className="fade-in-section">
                    <Projects />
                  </div>
                  <div className="fade-in-section">
                    <Contact />
                  </div>
                </>
              }
            />
            <Route path="/politique" element={<PrivacyPolicy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
