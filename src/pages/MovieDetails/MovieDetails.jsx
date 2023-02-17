import { useParams } from 'react-router-dom';
// import PropTypes from 'prop-types';

export const MovieDetails = () => {
  const { movieId } = useParams();
  return <div>Info about movie: {movieId}</div>;
};
