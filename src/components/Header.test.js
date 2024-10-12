import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

test('renders header with logo and navigation links', () => {
  render(
    <Router>
      <Header />
    </Router>
  );

  const logo = screen.getByText('Benda Chinchilla 500');
  expect(logo).toBeInTheDocument();

  const navLinks = ['Inicio', 'Fotos', 'Videos', 'Características', 'Blog'];
  navLinks.forEach(link => {
    const navLink = screen.getByText(link);
    expect(navLink).toBeInTheDocument();
  });
});