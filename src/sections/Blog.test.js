import React from 'react';
import { render, screen } from '@testing-library/react';
import Blog from './Blog';

describe('Blog Component', () => {
  test('renders blog section with posts', () => {
    render(<Blog />);

    // Verificar que el título del blog esté presente
    const blogTitle = screen.getByText('Blog');
    expect(blogTitle).toBeInTheDocument();

    // Verificar que las publicaciones del blog estén presentes
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

    // Verificar que el enlace "Leer más" esté presente en cada publicación
    const readMoreLinks = screen.getAllByText('Leer más');
    expect(readMoreLinks.length).toBe(posts.length); // Debe haber un enlace "Leer más" por cada publicación
  });
});

