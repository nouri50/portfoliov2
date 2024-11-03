import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer';
import '../Styles/Presentation.css';

function PresentationSection() {
  return (
    <div>
     
      <main className="presentation-container">
        <section className="presentation-section">
          <p>Bonjour, je m'appelle Nouri Morouche et je suis un développeur web débutant.</p>
          <p>Je suis passionné par le développement web et j'apprends de nouvelles choses chaque jour.</p>
          <p>J'ai une solide compréhension des bases du HTML, du CSS et du JavaScript, et je suis impatient d'apprendre de nouvelles technologies.</p>
          <p>Je suis également un bon communicateur et j'ai de bonnes compétences en résolution de problèmes.</p>
          <p>Je suis capable de travailler de manière autonome et en équipe, et je suis toujours prêt à relever de nouveaux défis.</p>
          <p>Si vous recherchez un développeur web motivé et talentueux, je serais ravi d'avoir l'occasion de discuter de vos besoins.</p>
        </section>
      </main>
     
    </div>
  );
}

export default PresentationSection;
