import express from 'express';
import cors from 'cors';
import sendMail from './mailer.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Configuration de CORS pour autoriser les requêtes depuis le frontend
app.use(cors({
  origin: 'http://localhost:3000', // Remplacez par l'URL de votre frontend en production si nécessaire
}));

app.use(express.json());

app.post('/send-email', (req, res) => {
  const { recipient, subject, content } = req.body;

  sendMail(recipient, subject, content)
    .then(() => res.status(200).json({ message: 'E-mail envoyé avec succès !' }))
    .catch((error) => {
      console.error('Erreur lors de l\'envoi de l\'e-mail:', error);
      res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'e-mail.' });
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Serveur backend en cours d'exécution sur le port ${PORT}`);
});
