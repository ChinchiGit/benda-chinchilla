import React from 'react';
import { render, screen } from '@testing-library/react';
import Videos from './Videos';

describe('Videos Component', () => {
  test('renders the videos section with title', () => {
    render(<Videos />);
    
    const title = screen.getByText('Videos');
    expect(title).toBeInTheDocument();
  });

  test('renders all video items', () => {
    render(<Videos />);
    
    const videoItems = screen.getAllByRole('heading', { level: 3 });
    expect(videoItems.length).toBe(4);

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
    
    const videosSection = container.querySelector('.videos');
    expect(videosSection).toBeInTheDocument();
    expect(videosSection.classList.contains('videos')).toBe(true);
  });
});
