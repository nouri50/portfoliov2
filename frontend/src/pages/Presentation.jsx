import React from "react";
import { Helmet } from 'react-helmet-async';
import "../Styles/Presentation.css";

function PresentationSection() {
  return (
    <>
      <Helmet>
        <title>À Propos de Moi - Nouri Morouche</title>
        <meta 
          name="description" 
          content="Découvrez l'histoire de Nouri Morouche, un développeur web passionné par la création d'expériences numériques engageantes et innovantes." 
        />
        <meta 
          name="keywords" 
          content="Nouri Morouche, développeur web, présentation, compétences, React, Node.js, HTML, CSS, JavaScript" 
        />
        <meta property="og:title" content="À Propos de Moi - Nouri Morouche" />
        <meta 
          property="og:description" 
          content="En savoir plus sur le parcours de Nouri Morouche, ses compétences techniques et son approche collaborative en développement web." 
        />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/presentation-thumbnail.png" />
        <link rel="canonical" href="https://nmoroucheportfolio.fr/about" />
      </Helmet>

      <div className="presentation-container">
        <section className="presentation-section">
          <h1 className="presentation-title">À Propos de Moi</h1>
          <div className="presentation-content">
            <p>
              Bonjour, je m'appelle <strong>Nouri Morouche</strong>, un
              développeur web en début de carrière passionné par la création
              d'expériences numériques engageantes et innovantes. Dès que j'ai
              découvert le monde du développement web, j'ai été captivé par
              l'opportunité de donner vie à des idées grâce au code.
            </p>
            <p>
              J'investis quotidiennement du temps pour perfectionner mes
              compétences et explorer de nouvelles technologies. En maîtrisant les
              bases solides du <strong>HTML</strong>, <strong>CSS</strong>, et{" "}
              <strong>JavaScript</strong>, je me concentre actuellement sur
              l'apprentissage de frameworks modernes comme <strong>React</strong>{" "}
              et <strong>Node.js</strong> pour créer des solutions performantes,
              du front-end au back-end.
            </p>
            <p>
              En plus de mes compétences techniques, je suis un adepte de la
              résolution de problèmes et un collaborateur efficace. Mon esprit
              critique et ma capacité à m'adapter m'aident à relever des défis
              complexes et à trouver des solutions innovantes. J'aime partager des
              idées et apprendre aux côtés d'autres professionnels, en visant
              toujours des résultats de haute qualité.
            </p>
            <p>
              Si vous êtes à la recherche d'un développeur motivé et passionné,
              prêt à contribuer à des projets ambitieux, je serais ravi d'échanger
              avec vous pour concrétiser vos idées et objectifs.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default PresentationSection;
