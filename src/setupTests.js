import 'intersection-observer';
import '@testing-library/jest-dom';

global.matchMedia = global.matchMedia || function() {
  return {
    matches: false,
    addListener: jest.fn(), // No es necesario implementar esto
    removeListener: jest.fn(), // No es necesario implementar esto
  };
};



