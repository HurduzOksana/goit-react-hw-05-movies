import { useEffect, useState } from 'react';
import { useParams, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { getFullInfo } from 'api/api';
import MovieDetailsComponent from 'components/MovieDetailsComponent/MovieDetailsComponent';

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const prevPage = location.state?.from ?? '/';

  useEffect(() => {
    getFullInfo(movieId)
      .then(({ data }) => setMovie(data.data))
      .catch(console.log('error'));
  }, [movieId]);

  const goBack = () => navigate(prevPage);

  return (
    <>
      {movie && (
        <MovieDetailsComponent
          img={movie.poster_path}
          title={movie.original_title}
          rating={movie.vote_average}
          overview={movie.overview}
          genres={movie.genres}
          goBack={goBack}
        />
      )}
      <Outlet />
    </>
  );
};

export { MoviesDetails };
