import React from 'react';
import { render, screen } from '@testing-library/react';
import Blog from './Blog';

describe('Blog Component', () => {
  test('renders blog section with posts', () => {
    render(<Blog />);

    const blogTitle = screen.getByText('Blog');
    expect(blogTitle).toBeInTheDocument();

    const posts = [
      'Benda Chinchilla 500: La nueva sensación en el mundo de las custom',
      'Comparativa: Benda Chinchilla 500 vs. Competidores',
      'Entrevista exclusiva con el diseñador de la Benda Chinchilla 500',
      'Las mejores rutas para disfrutar de tu Benda Chinchilla 500'
    ];

    posts.forEach(postTitle => {
      const post = screen.getByText(postTitle);
      expect(post).toBeInTheDocument();
    });

    const readMoreLinks = screen.getAllByText('Leer más');
    expect(readMoreLinks.length).toBe(posts.length);
  });
});
