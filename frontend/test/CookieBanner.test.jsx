import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CookieBanner from '../path/to/CookieBanner';

describe('CookieBanner Component', () => {
  test('renders cookie banner with appropriate message', () => {
    render(<CookieBanner />);
    expect(screen.getByText(/Ce site utilise des cookies/i)).toBeInTheDocument();
  });

  test('displays a policy link', () => {
    render(<CookieBanner />);
    const policyLink = screen.getByRole('link', { name: /politique de confidentialité/i });
    expect(policyLink).toBeInTheDocument();
    expect(policyLink).toHaveAttribute('href', '/politique');
  });

  test('accepts cookies on button click', () => {
    render(<CookieBanner />);
    const acceptButton = screen.getByRole('button', { name: /j'accepte/i });
    fireEvent.click(acceptButton);
    expect(acceptButton).not.toBeInTheDocument();
  });
});
