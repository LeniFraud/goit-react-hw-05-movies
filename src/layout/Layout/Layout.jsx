import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { routes } from 'utils/routes';
import logo from '../../utils/logo.png';
import { Loader } from 'components';
import { Container, Header, Logo, Nav, Link } from './Layout.styled';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <img src={logo} alt="My Movies logo" />
          <span>My</span>Movies
        </Logo>
        <Nav>
          <Link to={routes.HOME} end>
            Home
          </Link>
          <Link to={routes.MOVIES}>Movies</Link>
        </Nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <ToastContainer
        autoClose={2500}
        position="top-center"
        newestOnTop
        theme="colored"
      />
    </Container>
  );
};
