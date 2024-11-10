import React from 'react';
import { render, screen } from '@testing-library/react';
import PresentationSection from '../src/pages/Presentation';

describe('Presentation Page', () => {
  beforeEach(() => {
    render(<PresentationSection />);
  });

  test('Should render the introduction paragraph', () => {
    const introParagraph = screen.getByText(/Bonjour, je m'appelle Nouri Morouche/i);
    expect(introParagraph).toBeInTheDocument();
  });

  test('Should display all important sections about the developer', () => {
    const skillsParagraph = screen.getByText(/Chaque ligne de code que j'écris est une opportunité/i);
    expect(skillsParagraph).toBeInTheDocument();

    const teamParagraph = screen.getByText(/Je crois fermement au pouvoir de la collaboration/i);
    expect(teamParagraph).toBeInTheDocument();
  });
});
