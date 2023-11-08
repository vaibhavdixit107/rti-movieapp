import axios from 'axios';
import { API_KEY, BASE_URL } from '../constants/constants';

// Function to fetch popular movies
export const fetchPopularMovies = () => {
  return axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
};

// Function to fetch movie details by ID
export const fetchMovieDetails = (movieId) => {
  return axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`);
};
