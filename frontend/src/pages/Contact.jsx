import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../Styles/contact.css"; // Assurez-vous que ce fichier est importé correctement

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nom:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">Contactez-moi</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nom :</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-button">Envoyer</button>
      </form>

      {/* Exemples de liens supplémentaires */}
      <div className="contact-links">
        <Link to="/">Retour à l'accueil</Link>
        <Link to="/privacy-policy">Politique de confidentialité</Link>
      </div>
    </div>
  );
}

export default ContactPage;
