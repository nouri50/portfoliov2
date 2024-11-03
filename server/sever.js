const nodemailer = require('nodemailer');

// Configurer le transporteur SMTP pour SFR
const transporter = nodemailer.createTransport({
  host: 'smtp.sfr.fr',
  port: 465,
  secure: true, // true for secure connection
  auth: {
    user: 'nourimorouche@sfr.fr@sfr.fr',
    pass: 'votre_mot_de_passe',
  },
});

// Envoyer un e-mail
transporter.sendMail({
  from: 'votre_adresse_email@sfr.fr',
  to: 'destinataire@example.com',
  subject: 'contact',
  text: 'Contenu de l\'email',
})
  .then(info => {
    console.log('E-mail envoyé: ' + info.response);
  })
  .catch(error => {
    console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
  });
