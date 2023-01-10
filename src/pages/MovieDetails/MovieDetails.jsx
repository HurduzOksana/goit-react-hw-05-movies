import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams, Link, Outlet } from 'react-router-dom';
import styles from './MoviesDetails.module.css';
import { getSingleMovieService } from 'api/api';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const [movie, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    getSingleMovieService(movieId)
      .then(setPost)
      .catch(() => {
        toast.error('Something went wrong!');
      })
      .finally(() => setIsLoading(false));
  }, [movieId]);

  return (
    movie && (
      <div className={styles.Wrapper}>
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt={movie.title}
          style={{ width: '300px' }}
        />
        <div className={styles.Details}>
          <h1>{movie.title}</h1>
          <p>User score: {movie.vote_average}</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <ul>
            {movie.genres.map(({ name }, id) => (
              <li key={id}>{name}</li>
            ))}
          </ul>
          <Link className={styles.Button} to={`/posts/${movieId}/cast`}>
            Cast
          </Link>
          <Link className={styles.Button} to={`/posts/${movieId}/reviews`}>
            Reviews
          </Link>
          <Outlet />
        </div>
      </div>
    )
  );
};
