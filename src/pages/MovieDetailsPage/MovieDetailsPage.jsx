import { useState, useEffect, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieInfo, alertOnError, getPosterUrl } from 'services';
import { BackLink, Loader } from 'components';
import { Box, Wrapper, Link } from './MovieDetailsPage.styled';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';
  const isMoviesBackLink = location.state?.from.pathname.includes('movies');

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieInfo = await getMovieInfo(movieId);
        setMovie(movieInfo);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getMovie();
  }, [movieId]);

  useEffect(() => {
    if (error) alertOnError();
  }, [error]);

  const getGenres = genres => {
    if (genres.length === 0) return 'No genres';
    return genres.map(({ name }) => name).join(', ');
  };

  // if (!movie) return null;
  // const { title, poster_path, overview } = movie;

  return (
    <main>
      {loading && <Loader />}
      {!!movie && (
        <>
          <BackLink to={backLinkHref}>
            {isMoviesBackLink ? 'Back to Movies' : 'Back to HomePage'}
          </BackLink>
          <Box>
            <img src={getPosterUrl(movie.poster_path)} alt="Movie poster" />
            <h2>
              {movie.title} ({new Date(movie.release_date).getFullYear()})
            </h2>
            <p>User score: {Math.round(movie.vote_average * 10)}%</p>
            <h3>Overview</h3>
            <p>{movie.overview}</p>
            <h4>Genres</h4>
            <p>{getGenres(movie.genres)}</p>
          </Box>
          <h5>Additional information</h5>
          <Wrapper>
            <Link to="cast" state={{ from: backLinkHref }}>
              Cast
            </Link>
            <Link to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </Link>
          </Wrapper>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </>
      )}
    </main>
  );
}
