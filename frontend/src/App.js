import React from "react";
import Header from "./components/Header";
import LandingPage from "./sections/LandingPage";
import Parcours from "./sections/Experience";
import Services from "./sections/Mes-service.jsx";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import "./Styles/global.css";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <LandingPage />
        <Parcours />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
