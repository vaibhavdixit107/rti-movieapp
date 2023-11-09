import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/api';
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../constants/constants';
import { Card, CardContent, CardMedia, Typography, Container } from '@mui/material';

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details based on the ID from the URL parameter
    fetchMovieDetails(id)
      .then(response => {
        console.log(response.data);
        setMovie(response.data);
      })
      .catch(error => {
        console.error('Error fetching movie details:', error);
      });
  }, [id]);

  return (
    <Container>
      {movie ? (
        <div className="movie-details">
            <Card>
            <CardMedia
              component="img"
              alt={movie.title || 'Poster Image'}
              height="500"
              image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
            />
            <CardContent>
              <Typography variant="h4" component="div" data-testid="title">
                {movie.title}
              </Typography>
              <Typography variant="body1">{movie.overview}</Typography>
              <Typography variant="body2">User Rating: {movie.vote_average}</Typography>
              <Typography variant="body2">Release Date: {movie.release_date}</Typography>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </Container>
  );
}

export default MovieDetails;
