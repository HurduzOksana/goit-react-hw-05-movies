import { useState, useEffect } from 'react';
import {
  Link,
  useParams,
  useNavigate,
  Outlet,
  useLocation,
} from 'react-router-dom';

import { getFullInfo } from '../../api/api';

const singlePageRegexp = /^\/posts\/\d$/;

const SingleMoviePage = () => {
  const [state, setState] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/posts';

  useEffect(() => {
    getFullInfo()
      // .then(response => response.json())
      .then(data => setState(data.results))
      .catch(error => error.message);
  }, []);

  const goBack = () => navigate(from);

  const isSingelPage = singlePageRegexp.test(location.pathname);

  const commentsLink = isSingelPage ? `/posts/${id}/comments` : `/posts/${id}`;

  return (
    <div className="container">
      <button onClick={goBack}>Go back</button>
      {loading && <p>...Loading</p>}
      {state && (
        <>
          <h1 className="page-title">{state.title}</h1>
          <p>{state.body}</p>
          <Link state={{ from }} to={commentsLink}>
            Comments
          </Link>
          <Outlet />
        </>
      )}
    </div>
  );
};

export default SingleMoviePage;
