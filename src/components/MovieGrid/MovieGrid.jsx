import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchPopularMovies } from '../../services/api';
import { POSTER_SIZE, IMAGE_BASE_URL } from '../../constants/constants';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';

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
      <Grid container spacing={2} data-testid="movie-grid">
        {movies.map(movie => (
            <Grid item xs={6} sm={4} md={3} key={movie.id}>
          <Link to={`/movie/${movie.id}`} key={movie.id} className="movie-poster">
            <Card>
                <CardMedia
                component="img"
                alt={movie.title || 'Movie Poster'}
                height="350"
                image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
                data-testid="movie-poster-image"
              />
            <CardContent>
                  <Typography variant="h6" data-testid="title">{movie.title}</Typography>
                </CardContent>
                </Card>
          </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MovieGrid;
