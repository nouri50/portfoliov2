import React from 'react';
import { render, screen } from '@testing-library/react';
import Services from '../src/pages/Services';

describe('Services Page', () => {
  beforeEach(() => {
    render(<Services />);
  });

  test('Should render the title "Mes Services"', () => {
    const title = screen.getByText('Mes Services');
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe('H1');
  });

  test('Should display all service cards', () => {
    const serviceTitles = [
      'Développement Web',
      'Développement d\'Applications',
      'Optimisation SEO',
      'Conseil et Support Technique',
    ];

    serviceTitles.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });
});
