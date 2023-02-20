import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm, LoadButton, MoviesGallery, Loader } from 'components';
import {
  getSearchedMovies,
  alertOnSearch,
  alertOnRepeatedQuery,
  alertOnError,
} from 'services';

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        setLoading(true);
        const { movies, totalResults } = await getSearchedMovies(query, page);
        alertOnSearch(movies.length, totalResults);
        if (totalResults === 0) return setSearchParams('');
        setMovies(prevMovies => [...prevMovies, ...movies]);
        setTotalResults(totalResults);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    getMovies();
  }, [page, query, setSearchParams]);

  useEffect(() => {
    if (error) alertOnError();
  }, [error]);

  const searchFormSubmit = searchQuery => {
    const normalizedQuery = searchQuery.trim().toLowerCase();
    if (normalizedQuery === query) return alertOnRepeatedQuery(query);

    setMovies([]);
    setSearchParams({ query: normalizedQuery });
    setPage(1);
    setTotalResults(0);
  };

  const onLoadMoreBtnClick = () => setPage(prevPage => prevPage + 1);

  return (
    <main>
      <SearchForm onSubmit={searchFormSubmit} />
      {loading && <Loader />}
      {!!movies.length && <MoviesGallery movies={movies} path={''} />}
      {totalResults > 20 && <LoadButton onClick={onLoadMoreBtnClick} />}
    </main>
  );
}
