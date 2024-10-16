import React from 'react';
import { render, screen, act } from '@testing-library/react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';

test('renders header with logo and navigation links', () => {
  render(<Header />);

  const logo = screen.getByAltText('Benda Chinchilla 500');
  expect(logo).toBeInTheDocument();

  const navLinks = ['INICIO', 'FOTOS', 'VIDEOS', 'CARACTERÍSTICAS', 'BLOG'];
  navLinks.forEach(link => {
    const navLink = screen.getByText(link);
    expect(navLink).toBeInTheDocument();
  });
});

test('header has correct styles on scroll', () => {
  const { container } = render(<Header />);
  
  // Simular el scroll
  act(() => {
    window.scrollY = 100;
    window.dispatchEvent(new Event('scroll'));
  });

  expect(container.querySelector('.header')).toHaveClass('scrolled');
});

test('header displays menu toggle on small screens', () => {
  render(<Header />);

  // Simular un ancho de pantalla pequeño
  act(() => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
    window.dispatchEvent(new Event('resize'));
  });

  const menuToggle = screen.getByRole('button', { name: /toggle menu/i });
  expect(menuToggle).toBeInTheDocument();
});

test('header navigation menu displays correctly on small screens', () => {
  render(<Header />);

  // Simular un ancho de pantalla pequeño
  act(() => {
    Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 500 });
    window.dispatchEvent(new Event('resize'));
  });

  const menuToggle = screen.getByRole('button', { name: /toggle menu/i });
  
  // Hacer clic en el botón del menú
  act(() => {
    menuToggle.click();
  });

  // Verificar que el menú ahora esté visible
  const nav = screen.getByRole('navigation');
  expect(nav).toBeVisible();

});
