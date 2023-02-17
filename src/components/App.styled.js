import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  margin-right: 50px;
  color: black;

  &.active {
    color: orange;
  }
`;
