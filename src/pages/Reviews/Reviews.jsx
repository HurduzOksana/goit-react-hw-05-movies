import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReview } from 'api/api';

const Reviews = () => {
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
          {/* {reviews &&
            reviews.map(({ id, author, content }) => (
              <li key={id}>
                <p>{author}</p>
                <p>{content}</p>
              </li>
            ))} */}
          {reviews?.length > 0 ? (
            reviews.map(({ author, content, author_details, id }) => (
              <li key={id}>
                <p>Comment: {content}</p>
                <p>Author: {author}</p>
              </li>
            ))
          ) : (
            <p>No reviews</p>
          )}
        </ul>
      </div>
    </section>
  );
};

export default Reviews;
