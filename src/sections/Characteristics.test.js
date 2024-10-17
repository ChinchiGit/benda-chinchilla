import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Characteristics from './Characteristics';

describe('Characteristics Component', () => {
  test('renders characteristics section with title', () => {
    render(<Characteristics />);
    
    const title = screen.getByText('Características Técnicas');
    expect(title).toBeInTheDocument();
  });

  test('renders all characteristic sections', () => {
    render(<Characteristics />);
    
    const sections = [
      'MOTOR Y TRANSMISIÓN',
      'CHASIS Y PARTE CICLO',
      'DIMENSIONES'
    ];

    sections.forEach(section => {
      const sectionTitle = screen.getByText(section);
      expect(sectionTitle).toBeInTheDocument();
    });
  });

  test('toggles section details on click', () => {
    render(<Characteristics />);
    
    const sectionTitle = screen.getByText('MOTOR Y TRANSMISIÓN');
    fireEvent.click(sectionTitle);
    
    const details = screen.getByText('Bicilíndrico V-Twin de 4 tiempos y 4 válvulas por cilindro. OHC');
    expect(details).toBeInTheDocument();

    // Click again to collapse the section
    fireEvent.click(sectionTitle);
    expect(details).not.toBeVisible();
  });
});

