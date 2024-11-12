import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import LandingPage from './pages/LandingPage.jsx';
import About from './pages/Presentation.jsx';
import Projects from './pages/Projects.jsx';
import Experience from './pages/Experience.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import NotFound from './pages/NotFound.jsx'; 
import CookieBanner from './components/CookieBanner';
import ScrollToTop from './components/ScrollToTop'; 
import Services from './pages/Mes-service.jsx';
import './Styles/Background.css'; 
import './reset/index.css';

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Permet de revenir en haut lors du changement de route */}
      <div className="background-container">
        <div className="app-container">
          <Header />
          <CookieBanner />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/politique" element={<PrivacyPolicy />} />
            <Route path="/services" element={ <Services />} />
            <Route path="*" element={<NotFound />} /> 
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
