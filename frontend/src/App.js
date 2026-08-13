import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Importation pour la traduction
import useScrollAnimation from "./hooks/useScrollAnimation";
import Header from "./components/Header";
import LanguageSwitcher from "./components/LanguageSwitcher";
import LandingPage from "./sections/LandingPage";
import Parcours from "./sections/parcour";
import Services from "./sections/Mes-service";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import PopupBanner from "./utils/CookieBanner";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from "./pages/NotFound";
import CvPage from "./pages/CvPage"; // Ajout de la page CV
import { initGoogleAnalytics, trackPageView } from "./utils/analytics";
import "./reset/index.css";
import "./Styles/global.css";

console.log("Global CSS chargé !");

// 📌 **Gestion des pages vues dans Google Analytics**
const GoogleAnalyticsTracker = () => {
  const location = useLocation();

  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);

  return null;
};

function App() {
  useScrollAnimation();
  const { t } = useTranslation();

  useEffect(() => {
    initGoogleAnalytics("G-72S8X47T2F");
  }, []);

  return (
    <Router>
      <GoogleAnalyticsTracker />
      <div className="App">
        <PopupBanner />
        <Header />
        <LanguageSwitcher /> {/* Sélecteur de langue */}
        <main>
          <Routes>
            {/* ✅ Page d'accueil */}
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
            
            {/* ✅ Page du CV en ligne */}
            <Route path="/cv" element={<CvPage />} />
            
            {/* ✅ Pages légales et erreurs */}
            <Route path="/politique" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
