import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { getMovieCast } from 'api/api';
import styles from './Cast.module.css';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);

  //   useEffect(() => {
  //     getMovieCast(movieId)
  //       .then(setCast)
  //       .catch(() => {
  //         toast.error('Something went wrong!');
  //       });
  //   }, [movieId]);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId]);

  return (
    <section className={styles.Section}>
      <div>
        <ul className={styles.CastList}>
          {cast &&
            cast.map(({ id, name, character, profile_path }) => (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${profile_path}`}
                  alt={name}
                  className={styles.Poster}
                />
                <p>{name}</p>
                <p>{character}</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
