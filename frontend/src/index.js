import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Filtrage des warnings et erreurs spécifiques en mode développement
if (window.location.hostname === "localhost") {
  const originalWarn = console.warn;
  const originalError = console.error;

  console.warn = (message) => {
    if (!message.includes("UNSAFE_")) { // Ignorez les warnings spécifiques comme UNSAFE_ lifecycles
      originalWarn(message);
    }
  };

  console.error = (message) => {
    if (!message.includes("Google Tag Manager")) { // Ignorez les erreurs liées à Google Tag Manager
      originalError(message);
    }
  };

  console.log("Warnings et erreurs filtrés en mode développement !");
}

// Création de la racine de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Mesure des performances (optionnel)
reportWebVitals();
