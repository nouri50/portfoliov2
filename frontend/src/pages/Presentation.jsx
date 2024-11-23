import React from 'react';
import '../Styles/Presentation.css';
import { Helmet } from 'react-helmet';

      <Helmet>
        <title>Présentation - Portfolio</title>
        <meta name="description" content="Apprenez-en plus sur mon parcours et ma vision en développement web." />
        <meta property="og:title" content="Présentation - Portfolio" />
        <meta property="og:description" content="Apprenez-en plus sur mon parcours et ma vision en développement web." />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/presentation" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/images/portfolio-thumbnail.png" />
        <link rel="canonical" href="https://nmoroucheportfolio.fr/presentation" />
      </Helmet>

function PresentationSection() {
  return (
    <div className="presentation-container">
      <section className="presentation-section">
        <p>Bonjour, je m'appelle Nouri Morouche et je suis un développeur web débutant, passionné par la création et le développement d'expériences numériques engageantes et fonctionnelles. Depuis que j'ai commencé à m'intéresser à l'univers du développement web, j'ai découvert une véritable passion pour le codage et l'innovation technologique.</p>
        <p>Je consacre chaque jour du temps à approfondir mes compétences et à apprendre de nouvelles technologies pour rester à la pointe des pratiques actuelles. J'ai une solide compréhension des bases du HTML, du CSS et du JavaScript, et je suis également en train d'explorer des frameworks modernes comme React pour le développement front-end, ainsi que Node.js pour le back-end. Chaque ligne de code que j'écris est une opportunité de perfectionner mon savoir-faire et de créer des projets qui apportent une réelle valeur ajoutée aux utilisateurs.</p>
        <p>Mon parcours m'a permis de développer des compétences en résolution de problèmes et en pensée critique, des atouts essentiels pour faire face aux défis techniques complexes et trouver des solutions efficaces. Je suis également un bon communicateur et j'aime collaborer avec d'autres développeurs ou professionnels du secteur pour échanger des idées, apprendre les uns des autres, et produire des résultats de haute qualité.</p>
        <p>Travailler en autonomie est une de mes forces, mais je suis tout aussi à l'aise au sein d'une équipe. Je crois fermement au pouvoir de la collaboration pour surmonter les obstacles et accomplir des projets ambitieux. Je suis toujours prêt à relever de nouveaux défis et à me surpasser pour atteindre les objectifs fixés.</p>
        <p>Si vous recherchez un développeur web motivé, talentueux et soucieux de la qualité, je serais ravi d'avoir l'occasion de discuter avec vous de vos besoins, de vos projets et de la manière dont je peux contribuer à leur succès. Je suis convaincu que ma passion, ma volonté d'apprendre et mes compétences en développement web feront de moi un atout précieux pour tout projet web ambitieux.</p>
      </section>
    </div>
  );
}

export default PresentationSection;
