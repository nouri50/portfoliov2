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
    const mailtoLink = `mailto:nourimorouche@sfr.fr?subject=Message de ${formData.name}&body=${encodeURIComponent(
      `Nom : ${formData.name}\nEmail : ${formData.email}\n\nMessage :\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section contact fade-in" aria-label="Section contact">
      <Helmet>
        <title>Contactez Nouri Morouche | Développeur Web</title>
        <meta name="description" content="Envoyez un message à Nouri Morouche, développeur web. Contactez-moi pour discuter de vos projets." />
        <meta property="og:title" content="Contactez Nouri Morouche | Développeur Web" />
        <meta property="og:description" content="Contactez-moi pour discuter de vos projets web et collaborations." />
      </Helmet>

      <h2 className="section-title">Contactez-moi</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Nom" value={formData.name} onChange={handleChange} required aria-label="Nom" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required aria-label="Email" />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required aria-label="Message"></textarea>
        <button type="submit" className="cta-button">Envoyer</button>
      </form>
    </section>
  );
}

export default Contact;
