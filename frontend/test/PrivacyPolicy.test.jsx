import React from 'react';
import { render, screen } from '@testing-library/react';
import PrivacyPolicy from '../path/to/PrivacyPolicy';

describe('PrivacyPolicy Component', () => {
  test('renders privacy policy heading', () => {
    render(<PrivacyPolicy />);
    expect(screen.getByText(/Politique de Confidentialité/i)).toBeInTheDocument();
  });

  test('renders sections about data collection and rights', () => {
    render(<PrivacyPolicy />);
    expect(screen.getByText(/Données collectées/i)).toBeInTheDocument();
    expect(screen.getByText(/Droits des utilisateurs/i)).toBeInTheDocument();
  });
});
