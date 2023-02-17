import { Routes, Route, NavLink } from 'react-router-dom';
import { Home, Movies, MovieDetails, NotFound } from 'pages';
import { StyledLink } from './App.styled';

export const App = () => {
  return (
    <>
      <nav>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
        {/* <StyledLink to="/movies/:movieId">MovieDetails</StyledLink> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </>
  );
};
