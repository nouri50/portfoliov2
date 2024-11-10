import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../path/to/Footer';

describe('Footer Component', () => {
  test('renders footer with rights message', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2024 Nouri Morouche. Tous droits réservés./i)).toBeInTheDocument();
  });

  test('renders privacy policy link', () => {
    render(<Footer />);
    const privacyLink = screen.getByRole('link', { name: /politique de confidentialité/i });
    expect(privacyLink).toBeInTheDocument();
    expect(privacyLink).toHaveAttribute('href', '/politique');
  });

  test('renders GitHub and LinkedIn links', () => {
    render(<Footer />);
    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(githubLink).toBeInTheDocument();
    expect(linkedInLink).toBeInTheDocument();
  });
});
