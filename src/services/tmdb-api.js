import axios from 'axios';

const API_KEY = 'cf0ab519f45eea0dacef149b4aa4a796';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.params = {
  api_key: API_KEY,
};

export const getTrendingMovies = async page => {
  const params = {
    page,
  };

  const { data } = await axios.get('trending/movie/day', { params });
  const movies = data.results;
  return { movies, totalPages: data.total_pages };
};

export const getSearchedMovies = async (query, page) => {
  const params = {
    query,
    page,
  };

  const { data } = await axios.get('search/movie', { params });
  const movies = data.results;
  return { movies, totalResults: data.total_results };
};

export const getMovieInfo = async id => {
  const { data } = await axios.get(`movie/${id}`);
  return data;
};

export const getMovieCast = async id => {
  const { data } = await axios.get(`movie/${id}/credits`);
  return data.cast;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`);
  return data.results;
};
