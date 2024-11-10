import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from '../path/to/Projects';

describe('Projects Component', () => {
  test('renders project cards with correct titles', () => {
    render(<Projects />);
    expect(screen.getByText(/Projet Gestionnaire de Tâches/i)).toBeInTheDocument();
    expect(screen.getByText(/Projet Site Web Auto-école/i)).toBeInTheDocument();
  });

  test('renders GitHub link for the first project', () => {
    render(<Projects />);
    const githubLink = screen.getByRole('link', { name: /Voir sur GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/nouri50/GESTIONNAIRE-de-tache-');
  });
});
