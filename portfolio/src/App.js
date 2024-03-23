import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
          <Route path="/" element={<Presentation />} /> {/* Route pour la page de présentation */}
          <Route path="/parcour" element={<Parcours />} /> {/* Route pour la page de parcours */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

