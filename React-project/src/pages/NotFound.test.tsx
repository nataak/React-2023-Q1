/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';

describe('Not Found Bar', () => {
  it('Renders NotFound component', () => {
    render(<NotFound />);
    screen.debug();
    expect(screen.getByText(/404/i)).toBeInTheDocument();
  });
});
