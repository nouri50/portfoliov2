import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Presentation from './components/Presentation';
import Parcours from './components/Parcour';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/parcour" element={<Parcours />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


