import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('renders footer with developer info, LinkedIn link, and GitHub link', () => {
  render(<Footer />);

  // Verificar que la información del desarrollador esté presente
  const developerInfo = screen.getByText('Desarrollado por Carlos Chinchilla');
  expect(developerInfo).toBeInTheDocument();

  // Verificar que el enlace de LinkedIn esté presente
  const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
  expect(linkedInLink).toBeInTheDocument();
  expect(linkedInLink).toHaveAttribute('href', 'http://www.linkedin.com/in/c-chinchilla');
  expect(linkedInLink).toHaveAttribute('target', '_blank'); // Verificar que se abra en nueva ventana

  // Verificar que el enlace de GitHub esté presente cosas
  const githubLink = screen.getByRole('link', { name: /GitHub/i });
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute('href', 'https://github.com/ChinchiGit');
  expect(githubLink).toHaveAttribute('target', '_blank'); // Verificar que se abra en nueva ventana
});
