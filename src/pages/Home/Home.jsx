import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { getTrending } from 'api/api';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      // .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => error.message);
  }, []);

  return (
    <div className={styles.Container}>
      <h1>Trending today</h1>
      <div className={styles.PosterGallery}>
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
      </div>
    </div>
  );
};

export default Home;
