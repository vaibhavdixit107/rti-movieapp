import axios from 'axios';
import { fetchPopularMovies, fetchMovieDetails } from './api';

jest.mock('axios');

const popularMoviesResponse = {
  results: [
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
  ],
};

const movieDetailsResponse = {
  id: 1,
  title: 'Movie 1',
  overview: 'This is a movie overview.',
  vote_average: 8.5,
  release_date: '2023-01-01',
};

describe('API Tests', () => {
  it('should fetch popular movies', async () => {
    axios.get.mockResolvedValue({ data: popularMoviesResponse });

    const response = await fetchPopularMovies();
    expect(response.data).toEqual(popularMoviesResponse);
  });

  it('should fetch movie details by ID', async () => {
    axios.get.mockResolvedValue({ data: movieDetailsResponse });

    const response = await fetchMovieDetails(1);
    expect(response.data).toEqual(movieDetailsResponse);
  });

  it('should handle API request error', async () => {
    const errorMessage = 'Not Found';
    axios.get.mockRejectedValue({
      response: { status: 404, data: { message: errorMessage } },
    });

    try {
      await fetchMovieDetails(123); // Assuming this movie ID will trigger a 404 error
    } catch (error) {
      expect(error.response && error.response.status).toBe(404);
      expect(error.response && error.response.data && error.response.data.message).toBe(errorMessage);
    }
  });
});
