import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom';
import { Container, Header, Logo, Nav, Link } from './Layout.styled';
import logo from '../../utils/logo.png';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img src={logo} alt="My Movies logo" />
          <span>My</span>Movies
        </Logo>
        <Nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
          {/* <Link to="/movies/:movieId">Details</Link> */}
        </Nav>
      </Header>
      <Outlet />
      <ToastContainer autoClose={2500} newestOnTop theme="colored" />
    </Container>
  );
};
