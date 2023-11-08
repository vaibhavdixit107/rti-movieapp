import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularMovies } from '../services/api';
import { POSTER_SIZE, IMAGE_BASE_URL } from '../constants/constants';

function MovieGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch popular movies
    fetchPopularMovies()
      .then(response => {
        setMovies(response.data.results);
      })
      .catch(error => {
        console.error('Error fetching popular movies:', error);
      });
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <div className="movie-grid">
        {movies.map(movie => (
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-poster">
            <img
              src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
              alt={movie.title}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default MovieGrid;
