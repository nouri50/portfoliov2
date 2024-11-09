import nodemailer from 'nodemailer';
import 'dotenv/config'; // Charge les variables d'environnement

// Fonction pour envoyer un e-mail
const sendMail = (recipient, subject, content) => {
  // Configuration du transporteur SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // true pour TLS
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Définir les options de l'e-mail
  const mailOptions = {
    from: process.env.SMTP_USER, // Adresse de l'expéditeur
    to: recipient, // Adresse du destinataire
    subject: subject, // Sujet de l'e-mail
    text: content, // Contenu de l'e-mail
  };

  // Retourner une promesse pour l'envoi de l'e-mail
  return transporter.sendMail(mailOptions);
};

export default sendMail;
