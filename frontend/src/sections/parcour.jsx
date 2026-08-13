import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiSymfony, SiMysql, SiFigma, SiGit } from "react-icons/si";

function Parcours() {
  const parcours = [
    {
      title: "Expérience Professionnelle",
      items: [
        {
          header: "Stage en Développement Web - Insy2s",
          date: "Nov 2023 - Fév 2024",
          description:
            "Développement d'une interface utilisateur avec React.js, Symfony et MySQL.",
        },
      ],
    },
    {
      title: "Formation",
      items: [
        {
          header: "Titre Pro Développeur Web et Mobile",
          date: "2022 - 2023",
          description: "Diplôme obtenu à l'AFCI.",
        },
      ],
    },
  ];

  const technologies = [
    { name: "HTML5", icon: <FaHtml5 size={30} color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={30} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs size={30} color="#F7DF1E" /> },
    { name: "React.js", icon: <FaReact size={30} color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={30} color="#339933" /> },
    { name: "Symfony", icon: <SiSymfony size={30} color="#000000" /> },
    { name: "MySQL", icon: <SiMysql size={30} color="#00758F" /> },
    { name: "Figma", icon: <SiFigma size={30} color="#A259FF" /> },
    { name: "Git", icon: <SiGit size={30} color="#F05032" /> },
  ];

  return (
    <section id="parcours" className="section parcours" aria-label="Mon parcours et mes compétences">
      <div className="container">
        
        {/* Section Parcours */}
        <div className="card parcours">
          <h2>Mon Parcours</h2>
          <div className="parcours-content">
            {parcours.map((section, index) => (
              <div key={index} className="parcours-section">
                <h3>{section.title}</h3>
                {section.items.map((item, idx) => (
                  <div key={idx} className="parcours-item">
                    <h4>{item.header}</h4>
                    <p className="date">{item.date}</p>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Section Technologies */}
        <div className="card technologies">
          <h2>Technologies et Outils Maîtrisés</h2>
          <div className="tech-grid">
            {technologies.map((tech, index) => (
              <div key={index} className="tech-item">
                {tech.icon}
                <p>{tech.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Section CV */}
        <div className="card cv">
          <h2>Mon CV</h2>
          <p>Découvrez un aperçu de mon CV et téléchargez-le si besoin.</p>
          
          {/* Aperçu du CV */}
          <iframe 
            src="/assets/Cv-NouriMorouche.pdf" 
            className="cv-preview" 
            title="Aperçu du CV"
          ></iframe>

          {/* Bouton de téléchargement */}
          <a 
            href="/assets/Cv-NouriMorouche.pdf" 
            download="NouriMorouche_CV.pdf" 
            className="btn-download"
          >
            📄 Télécharger mon CV
          </a>
        </div>

      </div>
    </section>
  );
}

export default Parcours;
