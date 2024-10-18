import React from 'react';
import { render, screen } from '@testing-library/react';
import Videos from './Videos';

describe('Videos Component', () => {
  test('renders the videos section with title', () => {
    render(<Videos />);
    
    // Verificar que el título de la sección de videos esté presente
    const title = screen.getByText('Videos');
    expect(title).toBeInTheDocument();
  });

  test('renders all video items', () => {
    render(<Videos />);
    
    // Verificar que se renderizan todos los videos
    const videoItems = screen.getAllByRole('heading', { level: 3 });
    expect(videoItems.length).toBe(4); // Debe haber 4 videos

    // Verificar que los títulos de los videos están presentes
    const videoTitles = [
      'Benda Chinchilla 500 Review',
      'Benda Chinchilla 500 Test Ride',
      'Benda Chinchilla 500 vs Competitors',
      'Benda Chinchilla 500 Customization'
    ];

    videoTitles.forEach(title => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  test('applies correct styles', () => {
    const { container } = render(<Videos />);
    
    // Verificar que la sección tiene la clase 'videos'
    const videosSection = container.querySelector('.videos');
    expect(videosSection).toBeInTheDocument();
    expect(videosSection.classList.contains('videos')).toBe(true); // Verificar la clase aplicada
  });
});

