// import styles from './Movies.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { getMovie } from 'api/api';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const search = searchParams.get('search');

  const handleSubmit = e => {
    e.preventDefault();
    if (search?.trim() === '') {
      return alert('Try again');
    }
    const form = e.currentTarget;
    setSearchParams({ search: form.elements.search.value });
    form.reset();
  };

  useEffect(() => {
    if (search) {
      setLoading(true);
      getMovie(search)
        .then(data => setMovies(data.results))
        .catch(error => console.log(error))
        .finally(setLoading(false));
    }
  }, [search]);

  // const filter = searchParams.get('filter') ?? '';

  // useEffect(() => {
  //   getMovie().then(setMovies);
  // }, []);

  // const changeFilter = value => {
  //   setSearchParams(value !== '' ? { filter: value } : {});
  // };

  return (
    // <div className={styles.Searchbar}>
    //   <h1>Movies</h1>
    //   <form className={styles.SearchForm}>
    //     <button type="submit" className={styles['SearchForm-button']}>
    //       <span className={styles['SearchForm-button-label']}>Search</span>
    //     </button>
    //     <input
    //       className={styles['SearchForm-input']}
    //       type="text"
    //       autoComplete="off"
    //       autoFocus
    //       placeholder="Search movies..."
    //     />
    //   </form>
    <>
      <SearchBox handleSubmit={handleSubmit} />
      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </>

    // </div>
  );
};

export { Movies };
