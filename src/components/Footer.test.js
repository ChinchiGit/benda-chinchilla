import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer with developer info and LinkedIn link', () => {
  render(<Footer />);

  const developerInfo = screen.getByText('Desarrollado por Carlos Chinchilla');
  expect(developerInfo).toBeInTheDocument();

  const linkedInLink = screen.getByText('LinkedIn');
  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink).toHaveAttribute('href', 'http://www.linkedin.com/in/c-chinchilla');
});