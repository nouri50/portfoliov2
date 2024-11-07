const express = require('express');
const sendMail = require('./mailer');

const app = express();
app.use(express.json());

app.post('/send-email', (req, res) => {
  const { recipient, subject, content } = req.body;

  sendMail(recipient, subject, content)
    .then(() => res.status(200).send('E-mail envoyé avec succès !'))
    .catch((error) => res.status(500).send('Erreur lors de l\'envoi de l\'e-mail.'));
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${PORT}`);
});
