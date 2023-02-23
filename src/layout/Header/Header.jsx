import { routes } from 'utils/routes';
import logo from '../../utils/logo.png';
import { HeaderStyled, Container, Logo, Nav, Link } from './Header.styled';

export const Header = () => {
  return (
    <HeaderStyled>
      <Container>
        <Logo to={routes.HOME} end>
          <img src={logo} alt="My Movies logo" />
          <span>My</span>Movies
        </Logo>
        <Nav>
          <Link to={routes.HOME} end>
            Home
          </Link>
          <Link to={routes.MOVIES}>Movies</Link>
        </Nav>
      </Container>
    </HeaderStyled>
  );
};
