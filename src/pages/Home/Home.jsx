import { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { LoadButton } from 'components';
import { getTrendingMovies } from 'services';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const getMovies = async () => {
      try {
        // setStatus(Status.PENDING);
        const { movies, totalPages } = await getTrendingMovies(page);
        console.log(movies);
        // alertOnResolved(images.length, totalImages, page);
        setMovies(prevMovies => [...prevMovies, ...movies]);
        setTotalPages(totalPages);
        // setStatus(Status.RESOLVED);
      } catch (error) {
        // setStatus(Status.REJECTED);
        // alertOnRejected();
        console.log(error);
      }
    };

    getMovies();
  }, [page]);

  const onLoadMoreBtnClick = () => setPage(prevPage => prevPage + 1);

  return (
    <main>
      <h2>Trending movies</h2>
      {/* <img src="https://via.placeholder.com/960x240" alt="" /> */}
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
      {totalPages > 1 && <LoadButton onClick={onLoadMoreBtnClick} />}
    </main>
  );
};
