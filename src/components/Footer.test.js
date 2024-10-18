import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders footer with developer info, LinkedIn link, and GitHub link', () => {
    render(<Footer />);

    const developerInfo = screen.getByText('Desarrollado por Carlos Chinchilla');
    expect(developerInfo).toBeInTheDocument();

    const linkedInLink = screen.getByRole('link', { name: /LinkedIn/i });
    expect(linkedInLink).toBeInTheDocument();
    expect(linkedInLink).toHaveAttribute('href', 'http://www.linkedin.com/in/c-chinchilla');
    expect(linkedInLink).toHaveAttribute('target', '_blank');

    const githubLink = screen.getByRole('link', { name: /GitHub/i });
    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/ChinchiGit');
    expect(githubLink).toHaveAttribute('target', '_blank');
  });
});
