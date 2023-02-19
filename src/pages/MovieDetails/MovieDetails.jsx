import { useState, useEffect } from 'react';
import { useParams, Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { getMovieById } from 'services';
import { Wrapper, Link } from './MovieDetails.styled';

// const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  // const [page, setPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getMovie = async () => {
      try {
        // setStatus(Status.PENDING);
        const movieInfo = await getMovieById(movieId);
        console.log(movieInfo);
        // alertOnResolved(images.length, totalImages, page);
        setMovie(movieInfo);
        // setTotalPages(totalPages);
        // setStatus(Status.RESOLVED);
      } catch (error) {
        // setStatus(Status.REJECTED);
        // alertOnRejected();
        console.log(error);
      }
    };

    getMovie();
  }, [movieId]);

  const checkPoster = posterUrl =>
    posterUrl
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : 'https://dummyimage.com/500x750/ccc/fff.jpg&text=No+poster';

  const { title, poster_path, overview } = movie;

  return (
    <main>
      <p>Info about movie {movieId}</p>
      <img src={checkPoster(poster_path)} alt="Movie poster" />
      <h2>{title}</h2>
      <p>{overview}</p>
      {/* <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul> */}
      <Wrapper>
        <Link to="cast">Cast</Link>

        <Link to="reviews">Reviews</Link>
      </Wrapper>
      <Outlet />
    </main>
  );
};
