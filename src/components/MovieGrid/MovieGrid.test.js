import React from 'react';
import { getByTestId, render, screen, waitFor} from '@testing-library/react';
import MovieGrid from './MovieGrid';
import { fetchPopularMovies } from '../../services/api';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../services/api');

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
  it('renders popular movies', async () => {
    fetchPopularMovies.mockResolvedValueOnce({ data: { results: mockMovies } });

    render(
      <MemoryRouter>
        <MovieGrid />
      </MemoryRouter>
    );
    await waitFor(() => {
      expect(screen.getByText('Popular Movies')).toBeInTheDocument();
    });
  });
});
