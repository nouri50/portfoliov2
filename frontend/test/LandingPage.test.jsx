import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LandingPage from '../src/pages/LandingPage';

describe('LandingPage', () => {
  beforeEach(() => {
    render(
      <Router>
        <LandingPage />
      </Router>
    );
  });

  test('Should render the title and subtitle', () => {
    const title = screen.getByText('Bienvenue sur Mon Portfolio');
    const subtitle = screen.getByText('Découvrez mes projets, mon parcours et mon expertise en développement web.');

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass('landing-title');
    expect(subtitle).toBeInTheDocument();
    expect(subtitle).toHaveClass('intro-subtitle');
  });

  test('Should render all section cards', () => {
    const projectsCard = screen.getByText('Mes Projets');
    const servicesCard = screen.getByText('Services');
    const contactCard = screen.getByText('Contactez-moi');

    expect(projectsCard).toBeInTheDocument();
    expect(servicesCard).toBeInTheDocument();
    expect(contactCard).toBeInTheDocument();
  });

  test('Should render links with correct href attributes', () => {
    const projectsLink = screen.getByText('Voir les Projets');
    const servicesLink = screen.getByText('Voir les Services');
    const contactLink = screen.getByText('Me Contacter');

    expect(projectsLink).toHaveAttribute('href', '/projects');
    expect(servicesLink).toHaveAttribute('href', '/service');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
});
