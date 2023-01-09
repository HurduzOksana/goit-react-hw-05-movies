import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { getTrending } from 'api/api';

const Home = () => {
  const [posts, setMovies] = useState([]);

  useEffect(() => {
    getTrending()
      // .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => error.message);
  }, []);

  return (
    <div className={styles.Container}>
      <h1>Trending today</h1>
      <div>
        {posts.map(post => (
          <Link key={post.id} to={`/home/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
      </div>
    </div>
  );
};

export { Home };
