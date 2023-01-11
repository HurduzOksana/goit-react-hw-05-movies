import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import styles from './MoviesDetails.module.css';
import { getSingleMovieService } from 'api/api';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setPost] = useState(null);
  const navigate = useNavigate(null);

  const goBack = () => navigate('/');

  useEffect(() => {
    getSingleMovieService(movieId)
      .then(setPost)
      .catch(() => {
        toast.error('Something went wrong!');
      });
  }, [movieId]);

  return (
    movie && (
      <>
        <button onClick={goBack}>Go back</button>
        <div className={styles.Wrapper}>
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            style={{ width: '300px' }}
            className={styles.Poster}
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
            <NavLink className={styles.Button} to={`cast`}>
              Cast
            </NavLink>
            <NavLink className={styles.Button} to={`reviews`}>
              Reviews
            </NavLink>
            <Outlet />
          </div>
        </div>
      </>
    )
  );
};
