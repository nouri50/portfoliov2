import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>404 - Page Introuvable</title>
        <meta
          name="description"
          content="La page demandée n'existe pas. Retournez à l'accueil pour explorer mon portfolio."
        />
        <meta property="og:title" content="404 - Page Introuvable" />
        <meta
          property="og:description"
          content="La page demandée est introuvable. Visitez notre page d'accueil pour découvrir mes projets et services."
        />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/404" />
      </Helmet>

      <div className="not-found">
        <h1>404</h1>
        <p>Oups ! La page que vous recherchez n'existe pas.</p>
        <Link to="/" className="btn-home">
          Retour à l'accueil
        </Link>
      </div>
    </>
  );
}

export default NotFound;
