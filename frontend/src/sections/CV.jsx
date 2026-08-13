import React from "react";

const CVSection = () => {
  return (
    <section id="cv">
      <h2>Mon CV</h2>
      <p>Découvrez un aperçu de mon CV et téléchargez-le si besoin.</p>

      {/* Aperçu du PDF avec une taille réduite */}
      <div className="cv-preview-container">
        <iframe
          src="/assets/Cv-NouriMorouche.pdf"
          className="cv-preview"
          title="Aperçu du CV"
        ></iframe>
      </div>

      {/* Bouton de téléchargement */}
      <a
        href="/assets/Cv-NouriMorouche.pdf"
        download="NouriMorouche_CV.pdf"
        className="btn-download"
      >
        📄 Télécharger mon CV
      </a>
    </section>
  );
};

export default CVSection;
