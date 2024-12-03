import React, { useState } from "react";
import { Helmet } from 'react-helmet-async';
import "../Styles/contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:nourimorouche@sfr.fr?subject=Contact depuis le portfolio&body=Nom: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-container">
      <Helmet>
        <title>Contactez-moi - Nouri Morouche</title>
        <meta name="description" content="Contactez-moi via ce formulaire pour toute question ou collaboration en développement web." />
        <link rel="canonical" href="https://nmoroucheportfolio.fr/contact" />
      </Helmet>
      <h1>Contactez-moi</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Nom :</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="message">Message :</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default Contact;
