import styles from './SearchBox.module.css';

export const SearchBox = ({ handleSubmit }) => {
  return (
    <div className={styles.Searchbar}>
      <form className={styles.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={styles['SearchForm-button']}>
          <span className={styles['SearchForm-button-label']}>Search</span>
        </button>
        <input
          className={styles['SearchForm-input']}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies..."
          name="search"
        />
      </form>
    </div>
  );
};
