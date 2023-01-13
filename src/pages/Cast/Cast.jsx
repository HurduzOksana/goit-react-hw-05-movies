import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/api';
import styles from './Cast.module.css';
import icon from 'images/icon.jpg';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  useEffect(() => {
    fetchCast();
    async function fetchCast() {
      try {
        const data = await getMovieCast(movieId);
        setCast(data.cast);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);

  return (
    <section className={styles.Section}>
      <div>
        <ul className={styles.CastList}>
          {cast &&
            cast.map(({ id, name, character, profile_path }) => (
              <li key={id}>
                {profile_path !== null ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                    alt={name}
                    className={styles.Poster}
                  />
                ) : (
                  <img src={icon} alt={name} className={styles.Poster} />
                )}
                <p>{name}</p>
                <p>{character}</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default Cast;
