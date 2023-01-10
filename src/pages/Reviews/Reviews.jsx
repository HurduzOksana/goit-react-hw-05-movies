import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from 'api/api';
import { toast } from 'react-toastify';
// import styles from './Cast.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReview] = useState(null);

  useEffect(() => {
    getReviewComments();
    async function getReviewComments() {
      try {
        const data = await getReview(movieId);
        setReview(data.results);
      } catch (error) {
        console.log(error);
      }
    }
  }, [movieId]);

  return (
    <section>
      <div>
        <ul>
          {reviews &&
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
