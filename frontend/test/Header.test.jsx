import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../path/to/Header';

describe('Header Component', () => {
  test('renders logo link', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    const logoLink = screen.getByRole('link', { name: /Logo du site/i });
    expect(logoLink).toBeInTheDocument();
    expect(logoLink).toHaveAttribute('href', '/');
  });

  test('renders navigation links', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByText(/Accueil/i)).toBeInTheDocument();
    expect(screen.getByText(/À propos/i)).toBeInTheDocument();
    expect(screen.getByText(/Projets/i)).toBeInTheDocument();
    expect(screen.getByText(/Parcours/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });
});
