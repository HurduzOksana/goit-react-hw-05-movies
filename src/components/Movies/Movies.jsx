import styles from './Movies.module.css';

const Movies = () => {

  
  return (
    <div className={styles.Searchbar}>
      <h1>Movies</h1>
      <form className={styles.SearchForm}>
        <button type="submit" className={styles['SearchForm-button']}>
          <span className={styles['SearchForm-button-label']}>Search</span>
        </button>
        <input
          className={styles['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
        />
      </form>
    </div>
  );
};

export { Movies };
