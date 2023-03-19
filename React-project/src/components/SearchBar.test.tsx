/* eslint-disable react/jsx-no-bind */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import SearchBar from './SearchBar';

describe('Search Bar', () => {
  it('Renders Search component', () => {
    render(
      <SearchBar
        onSearch={(searchText: string): void => {
          throw new Error('Function not implemented.');
        }}
      />
    );
    screen.debug();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText(/search/i)).toBeInTheDocument();
  });
});
