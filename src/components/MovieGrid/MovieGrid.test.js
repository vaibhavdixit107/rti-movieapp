import React from 'react';
import { getByTestId, render, screen } from '@testing-library/react';
import MovieGrid from './MovieGrid';
import { fetchPopularMovies } from '../../services/api';

jest.mock('../../services/api', () => ({
  fetchPopularMovies: jest.fn(() => Promise.resolve({ data: { results: [] } })),
}));

const mockMovies = [
  {
    id: 1,
    title: 'Movie 1',
    poster_path: '/poster1.jpg',
  },
  {
    id: 2,
    title: 'Movie 2',
    poster_path: '/poster2.jpg',
  },
];


describe('MovieGrid UI Tests', () => {
  it('renders the movie grid with movie posters', async () => {
    fetchPopularMovies.mockResolvedValue({ data: { results: mockMovies } });

    render(<MovieGrid />);

    
   

    // Wait for the "Popular Movies" text to be present
    await screen.findByText('Popular Movies');
    // console.log(screen.debug());
    
    
  });
});
