import React from "react";
import { FaHtml5, FaReact, FaNodeJs, FaCss3Alt, FaDatabase } from "react-icons/fa";

function Parcours() {
  return (
    <section id="parcours" className="section parcours fade-in">
      <h2 className="section-title">Parcours</h2>
      <p className="parcours-description">
        Je suis un développeur passionné spécialisé dans la création de sites web modernes et performants. 
        J'ai suivi une formation approfondie en développement web et mobile, ce qui m'a permis d'acquérir des compétences solides 
        pour répondre aux besoins des entreprises en termes de solutions digitales. Je maîtrise les technologies suivantes :
      </p>
      <div className="parcours-icons">
        <div className="tech-item">
          <FaHtml5 size={40} color="#E34F26" title="HTML5" />
          <span>HTML5</span>
        </div>
        <div className="tech-item">
          <FaCss3Alt size={40} color="#1572B6" title="CSS3" />
          <span>CSS3</span>
        </div>
        <div className="tech-item">
          <FaReact size={40} color="#61DAFB" title="React.js" />
          <span>React.js</span>
        </div>
        <div className="tech-item">
          <FaNodeJs size={40} color="#339933" title="Node.js" />
          <span>Node.js</span>
        </div>
        <div className="tech-item">
          <FaDatabase size={40} color="#00758F" title="MySQL & PostgreSQL" />
          <span>MySQL / PostgreSQL</span>
        </div>
      </div>
    </section>
  );
}

export default Parcours;
