import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // ✅ Vérifie bien cet import !
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HelmetProvider> {/* Assure-toi que HelmetProvider englobe l'application */}
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </HelmetProvider>
);
