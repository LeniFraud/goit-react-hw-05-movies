import { useParams, Link, Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';

export const MovieDetails = () => {
  const { movieId } = useParams();
  return (
    <main>
      <p>Info about movie {movieId}</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </main>
  );
};
