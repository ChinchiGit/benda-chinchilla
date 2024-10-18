import React from 'react';
import { render, screen, act } from '@testing-library/react';
import Photos from './Photos';

describe('Photos Component', () => {
  test('renders the photos section with title', () => {
    render(<Photos />);
    
    const title = screen.getByText('Galería de Fotos');
    expect(title).toBeInTheDocument();
  });

  test('renders one photo at a time and changes after 3 seconds', async () => {
    render(<Photos />);
    
    const images = screen.getAllByRole('img');
    expect(images.length).toBe(1);
    expect(images[0].src).toBe('https://www.motostarragona.com/cdn/shop/files/benda-espana-benda-chinchilla-500-promociones-benda-motos-tarragona-concesionario-oficial-benda-tarragona-reus-girona-lleida-barcelona-oferta-19_2048x.jpg?v=1718709433');

    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
    });
    
    const secondImage = screen.getByRole('img');
    expect(secondImage.src).not.toBe(images[0].src);
  });

  test('applies correct styles', () => {
    const { container } = render(<Photos />);
    const photosSection = container.querySelector('.photos');
    expect(photosSection).toBeInTheDocument();
    expect(photosSection.classList.contains('photos')).toBe(true);
  });
});
