import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ContactPage from '../src/pages/Contact';

// Fonction utilitaire pour remplir le formulaire
const fillContactForm = (name, email, message) => {
  fireEvent.change(screen.getByLabelText(/Nom/i), { target: { value: name } });
  fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: email } });
  fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: message } });
};

describe('ContactPage', () => {
  test('Should display an error message when the name field is empty', async () => {
    render(
      <Router>
        <ContactPage />
      </Router>
    );

    fillContactForm('', 'test@example.com', 'This is a test message.');
    fireEvent.click(screen.getByRole('button', { name: /Envoyer/i }));

    const errorMessage = await screen.findByText(/Tous les champs sont requis./i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('Should display an error message when the email is invalid', async () => {
    render(
      <Router>
        <ContactPage />
      </Router>
    );

    fillContactForm('Test User', 'invalid-email', 'This is a test message.');
    fireEvent.click(screen.getByRole('button', { name: /Envoyer/i }));

    const errorMessage = await screen.findByText(/Veuillez entrer une adresse email valide./i);
    expect(errorMessage).toBeInTheDocument();
  });

  test('Should successfully submit the form when all fields are valid', async () => {
    render(
      <Router>
        <ContactPage />
      </Router>
    );

    fillContactForm('Test User', 'test@example.com', 'This is a valid test message.');
    fireEvent.click(screen.getByRole('button', { name: /Envoyer/i }));

    // Ajoutez ici le test pour vérifier le message de succès si nécessaire.
  });
});
