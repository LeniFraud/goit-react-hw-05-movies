import { Container } from 'components';
import { routes } from 'utils/routes';
import { Wrapper, Link, MainBox } from './NotFoundPage.styled';

export default function NotFoundPage() {
  return (
    <MainBox>
      <Container>
        <Wrapper>
          <p>404</p>
          <p>Sorry, this page doesn't exists.</p>
          <Link to={routes.HOME} end>
            Return to Homepage
          </Link>
        </Wrapper>
      </Container>
    </MainBox>
  );
}
