import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  fr: {
    translation: {
      welcome: "Bienvenue sur mon portfolio",
      description: "Je suis un développeur passionné spécialisé dans la création de solutions digitales modernes.",
      cvTitle: "Mon CV",
      cvPreview: "Découvrez un aperçu de mon CV et consultez-le en ligne.",
      viewFullCV: "Voir mon CV en ligne",
      downloadCV: "Télécharger le CV",
      back: "⬅ Retour",
      parcours: "Mon Parcours",
      experience: "Expérience Professionnelle",
      stage: "Stage en Développement Web - Insy2s",
      formation: "Formation",
      technologies: "Technologies et Outils Maîtrisés",
      contact: "Contactez-moi"
    }
  },
  en: {
    translation: {
      welcome: "Welcome to my portfolio",
      description: "I am a passionate developer specializing in creating modern digital solutions.",
      cvTitle: "My Resume",
      cvPreview: "See a preview of my resume and view it online.",
      viewFullCV: "View my full CV",
      downloadCV: "Download CV",
      back: "⬅ Back",
      parcours: "My Journey",
      experience: "Professional Experience",
      stage: "Internship in Web Development - Insy2s",
      formation: "Education",
      technologies: "Technologies and Tools Mastered",
      contact: "Contact Me"
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "fr",
  fallbackLng: "fr",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
