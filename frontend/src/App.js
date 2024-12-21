import React from "react";
import useScrollAnimation from "./hooks/useScrollAnimation";
import Header from "./components/Header";
import LandingPage from "./sections/LandingPage.jsx";
import Parcours from "./sections/parcour.jsx";
import Services from "./sections/Mes-service.jsx";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import PopupBanner from "./components/CookieBanner.jsx";
import "./Styles/global.css";

function App() {
  useScrollAnimation(); // Appliquer le hook d'animation

  return (
    <div className="App">
      <PopupBanner />
      <Header />
      <main>
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
      </main>
      <Footer />
    </div>
  );
}

export default App;
