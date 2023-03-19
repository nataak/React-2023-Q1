import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About', () => {
  it('Renders About component', () => {
    render(<About />);
    screen.debug();
    expect(screen.getByText(/page/i)).toBeInTheDocument();
  });
});
