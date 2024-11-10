import React from 'react';
import { render, screen } from '@testing-library/react';
import Experience from '../src/pages/Experience';

describe('Experience Page', () => {
  beforeEach(() => {
    render(<Experience />);
  });

  test('Should render the main title "Mon Parcours"', () => {
    const titleElement = screen.getByText('Mon Parcours');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');
  });

  test('Should display professional experience section', () => {
    const expSection = screen.getByText('Expérience Professionnelle');
    expect(expSection).toBeInTheDocument();

    const stageTitle = screen.getByText('Stage en Développement Web - Insy2s');
    expect(stageTitle).toBeInTheDocument();

    const stageDate = screen.getByText('Date : novembre 2023 - février 2024');
    expect(stageDate).toBeInTheDocument();
  });

  test('Should display formation section', () => {
    const formationSection = screen.getByText('Formation');
    expect(formationSection).toBeInTheDocument();

    const formationTitle = screen.getByText('Titre Professionnel de Développeur Web et Web Mobile');
    expect(formationTitle).toBeInTheDocument();

    const formationDate = screen.getByText('Date : 2022 - 2023');
    expect(formationDate).toBeInTheDocument();
  });
});
