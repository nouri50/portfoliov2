import React from "react";

function Contact() {
  return (
    <section id="contact" className="section contact">
      <h2 className="section-title">Contactez-moi</h2>
      <form className="contact-form">
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit" className="cta-button">
          Envoyer
        </button>
      </form>
    </section>
  );
}

export default Contact;
