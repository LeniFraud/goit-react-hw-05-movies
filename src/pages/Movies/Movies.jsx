import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { SearchForm, LoadButton } from 'components';
import { getSearchedMovies, alertOnRepeatedQuery } from 'services';

export const Movies = () => {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        // setStatus(Status.PENDING);
        const { movies, totalPages } = await getSearchedMovies(query, page);
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
  }, [query, page]);

  const searchFormSubmit = searchQuery => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (normalizedQuery === query) return alertOnRepeatedQuery(query);

    setMovies([]);
    setQuery(normalizedQuery);
    setPage(1);
    // setTotalImages(0);
  };

  const onLoadMoreBtnClick = () => setPage(prevPage => prevPage + 1);

  return (
    <main>
      <SearchForm onSubmit={searchFormSubmit} />
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>
            <NavLink to={`${id}`}> {title}</NavLink>
          </li>
        ))}
      </ul>
      {totalPages > 1 && <LoadButton onClick={onLoadMoreBtnClick} />}
    </main>
  );
};
