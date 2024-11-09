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
import CookieBanner from './components/CookieBanner'; // Import de la bannière de cookies
import './Styles/Background.css'; // Assurez-vous que le fond est bien défini dans ce fichier CSS

function App() {
  return (
    <Router>
      <div className="background-container"> {/* Ce div contiendra le fond */}
        <div className="app-container">
          <Header />
          <CookieBanner /> {/* Placement de la bannière ici */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/politique" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
