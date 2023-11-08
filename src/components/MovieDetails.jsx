import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';
import { POSTER_SIZE, IMAGE_BASE_URL } from '../constants/constants';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details based on the ID from the URL parameter
    fetchMovieDetails(id)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  return (
    <div>
      {movie ? (
        <div className="movie-details">
          <h2>{movie.original_title}</h2>
          <img
              src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
              alt={movie.title}
            />
          <p>{movie.overview}</p>
          <p>User Rating: {movie.vote_average}</p>
          <p>Release Date: {movie.release_date}</p>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}

export default MovieDetails;
