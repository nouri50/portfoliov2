// @ts-nocheck

import React, { useState } from 'react';
import DOMPurify from 'dompurify'; // Importer DOMPurify
import { Link } from 'react-router-dom';
import "../Styles/contact.css";

function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setResponseMessage(DOMPurify.sanitize('Tous les champs sont requis.'));
      setIsSuccess(false);
      return;
    }

    if (!validateEmail(email)) {
      setResponseMessage(DOMPurify.sanitize('Veuillez entrer une adresse email valide.'));
      setIsSuccess(false);
      return;
    }

    setLoading(true);
    setResponseMessage('');

    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          recipient: email,
          subject: `Nouveau message de ${name}`,
          content: DOMPurify.sanitize(message), // Sécuriser le contenu du message
        }),
      });

      if (response.ok) {
        setResponseMessage(DOMPurify.sanitize('Votre message a été envoyé avec succès !'));
        setIsSuccess(true);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setResponseMessage(DOMPurify.sanitize('Erreur lors de l\'envoi de votre message. Veuillez réessayer.'));
        setIsSuccess(false);
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi:', error);
      setResponseMessage(DOMPurify.sanitize('Une erreur est survenue. Veuillez réessayer.'));
      setIsSuccess(false);
    } finally {
      setLoading(false);
    }
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
        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? 'Envoi en cours...' : 'Envoyer'}
        </button>
        {responseMessage && (
          <div className={`message ${isSuccess ? 'success' : 'error'}`}>
            {responseMessage}
          </div>
        )}
      </form>

      <div className="contact-links">
        <Link to="/">Retour à l'accueil</Link>
        <Link to="/politique">Politique de confidentialité</Link>
      </div>
    </div>
  );
}

export default ContactPage;
