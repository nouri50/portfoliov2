import React from "react";
import "../Styles/Presentation.css";

function PresentationSection() {
  return (
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
  );
}

export default PresentationSection;
