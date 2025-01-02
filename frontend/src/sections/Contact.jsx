import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Construire le lien mailto
    const mailtoLink = `mailto:nourimorouche@sfr.fr?subject=Message de ${formData.name}&body=${encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\n\nMessage :\n${formData.message}`
    )}`;

    // Ouvrir le client de messagerie
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section contact fade-in">
      <Helmet>
        <title>Contactez Nouri Morouche | Développeur Web</title>
        <meta
          name="description"
          content="Envoyez un message à Nouri Morouche, développeur web. Contactez-moi pour discuter de vos projets et collaborations."
        />
        <meta
          property="og:title"
          content="Contactez Nouri Morouche | Développeur Web"
        />
        <meta
          property="og:description"
          content="Envoyez un message à Nouri Morouche, développeur web. Contactez-moi pour discuter de vos projets et collaborations."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nmoroucheportfolio.fr/contact" />
        <meta property="og:image" content="/portfolio-contact-thumbnail.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contactez Nouri Morouche | Développeur Web"
        />
        <meta
          name="twitter:description"
          content="Envoyez un message à Nouri Morouche, développeur web. Contactez-moi pour discuter de vos projets et collaborations."
        />
        <meta name="twitter:image" content="/portfolio-contact-thumbnail.png" />
      </Helmet>
      <h2 className="section-title">Contactez-moi</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="cta-button">
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contact;
