import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiSymfony, SiMysql, SiTailwindcss, SiPostgresql, SiFigma, SiGit } from "react-icons/si";

function Parcours() {
  const parcours = [
    {
      title: "Expérience Professionnelle",
      items: [
        {
          header: "Stage en Développement Web - Insy2s",
          date: "Novembre 2023 - Février 2024",
          description:
            "Participation au développement d'une interface utilisateur moderne avec React.js, Symfony et MySQL.",
        },
      ],
    },
    {
      title: "Formation",
      items: [
        {
          header: "Titre Professionnel Développeur Web et Mobile",
          date: "2022 - 2023",
          description: "Obtention du diplôme à l'AFCI.",
        },
        {
          header: "Formation - Afpa Roubaix",
          date: "Mars/Avril 2023",
          description: "Développement d'applications spécialisées en technologies web.",
        },
        {
          header: "Incubateur Nurserie - M2i à distance",
          date: "Novembre 2022",
          description: "Formation en développement d'applications.",
        },
      ],
    },
  ];

  const technologies = [
    { name: "HTML5", icon: <FaHtml5 size={40} color="#E34F26" /> },
    { name: "CSS3", icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs size={40} color="#F7DF1E" /> },
    { name: "React.js", icon: <FaReact size={40} color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs size={40} color="#339933" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={40} color="#06B6D4" /> },
    { name: "Symfony", icon: <SiSymfony size={40} color="#000000" /> },
    { name: "MySQL", icon: <SiMysql size={40} color="#00758F" /> },
    { name: "PostgreSQL", icon: <SiPostgresql size={40} color="#336791" /> },
    { name: "Figma", icon: <SiFigma size={40} color="#A259FF" /> },
    { name: "Git", icon: <SiGit size={40} color="#F05032" /> },
  ];

  return (
    <section id="parcours" className="section parcours">
      <div className="container">
        {/* Bloc Parcours */}
        <div className="card parcours">
          <h2>Mon Parcours</h2>
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

        {/* Bloc Technologies */}
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
      </div>
    </section>
  );
}

export default Parcours;
