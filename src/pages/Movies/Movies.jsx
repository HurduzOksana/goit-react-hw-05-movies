// import styles from './Movies.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMovie } from 'api/api';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './Movies.module.css';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  const handleSubmit = e => {
    e.preventDefault();
    if (search?.trim() === '') {
      return alert('Nothing');
    }
    const form = e.currentTarget;
    setSearchParams({ search: form.elements.search.value });
    form.reset();
  };

  useEffect(() => {
    if (search) {
      getMovie(search)
        .then(data => setMovies(data.results))
        .catch(error => console.log(error));
    }
  }, [search]);

  return (
    <div className={styles.Container}>
      <SearchBox handleSubmit={handleSubmit} />
      {movies && (
        <ul className={styles.PosterGallery}>
          {/* {movies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))} */}
          {movies.map(movie => (
            <Link key={movie.id} to={`/movies/${movie.id}`}>
              <li className={styles.ImageGalleryItem}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: '300px' }}
                  className={styles['ImageGalleryItem-image']}
                />
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
