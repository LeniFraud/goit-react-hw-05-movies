// import PropTypes from 'prop-types';
import { Wrapper, Link } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Wrapper>
      <p>This page doesn't exists!</p>
      <Link to="/" end>
        Return to Homepage
      </Link>
    </Wrapper>
  );
};
