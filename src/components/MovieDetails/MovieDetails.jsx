// import styles from './MoviesDetails.module.css';
import { useParams } from 'react-router-dom';

const MoviesDetails = () => {
  const { id } = useParams();
  return <div>Now showing product with id - {id}</div>;
};

export { MoviesDetails };
