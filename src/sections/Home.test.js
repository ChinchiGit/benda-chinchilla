import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('renders home section with title and subtitle', async () => {
    render(<Home />);
    
    // Esperar a que el componente sea visible
    await waitFor(() => {
      const title = screen.getByText('La Benda Chinchilla 500');
      const subtitle = screen.getByText('Una moto con el mejor apellido');
      expect(title).toBeInTheDocument();
      expect(subtitle).toBeInTheDocument();
    });
  });

  test('renders content with description and features', () => {
    render(<Home />);
    
    const description = screen.getByText(/La Benda Chinchilla 500 es una moto custom de origen chino/i);
    expect(description).toBeInTheDocument();

    const features = [
      'Diseño atractivo: Su estética custom, con líneas sencillas y un toque retro, la hace destacar en la carretera.',
      'Motor V2: Equipada con un motor bicilíndrico en V, ofrece una entrega de potencia suave y progresiva, ideal para disfrutar de la conducción tanto en ciudad como en carretera abierta.',
      'Comodidad: Su posición de conducción relajada y su asiento cómodo la convierten en una moto perfecta para viajes largos.',
      'Relación calidad-precio: La Chinchilla 500 ofrece una excelente relación calidad-precio, combinando un diseño atractivo con componentes de calidad a un precio competitivo.'
    ];

    features.forEach(feature => {
      const featureItem = screen.getByText(feature);
      expect(featureItem).toBeInTheDocument();
    });
  });

});
