import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieDetailsComponent = p => {
  const location = useLocation();
  const prevPage = location.state?.from ?? '/';

  return (
    <>
      <div>
        <img
          width={'300px'}
          src={`https://image.tmdb.org/t/p/w500${p.img}`}
          alt="poster"
        />
        <div>
          <h2>{p.title}</h2>
          <p>Rating: {p.rating}</p>
          <h3>Overview</h3>
          <p>{p.overview}</p>
          <h3>Genres</h3>
          <ul>
            {p.genres.map(({ name }, idx) => (
              <li key={idx}>{name}</li>
            ))}
          </ul>
        </div>
      </div>
      <button type="button" onClick={p.goBack}>
        go back
      </button>
      <div>
        <NavLink to="cast" state={{ from: prevPage }}>
          Cast
        </NavLink>
        <NavLink to="reviews" state={{ from: prevPage }}>
          Reviews
        </NavLink>
      </div>
    </>
  );
};

export default MovieDetailsComponent;

MovieDetailsComponent.propTypes = {
  p: PropTypes.shape({
    img: PropTypes.string,
    title: PropTypes.string,
    rating: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.array,
    goBack: PropTypes.func.isRequired,
  }),
};
