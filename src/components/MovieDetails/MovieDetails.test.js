import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import { fetchMovieDetails } from '../../services/api';

jest.mock('../../services/api');

const mockMovie = {
  id: 1,
  title: 'Original Movie Title',
  original_title: 'Original Movie Title',
  overview: 'Movie overview',
  vote_average: 7.5,
  release_date: '2023-01-01',
  poster_path: '/poster.jpg',
};

describe('MovieDetails Component', () => {
  beforeEach(() => {
    fetchMovieDetails.mockResolvedValueOnce({ data: mockMovie });
  });

  it('renders movie details', async () => {
    render(
      <MemoryRouter>
      <MovieDetails />
    </MemoryRouter>
    );

    // Wait for the movie details to be rendered
    await waitFor(() => {
      const originalTitleElement = screen.getByTestId('title');
      expect(originalTitleElement).toBeInTheDocument();
    });
  });

});