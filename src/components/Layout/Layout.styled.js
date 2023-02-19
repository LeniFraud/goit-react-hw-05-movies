import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid #444243;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  color: #444243;
  font-family: 'Lobster', cursive;
  font-size: 30px;

  > img {
    width: 80px;
    margin-right: 12px;
  }

  span {
    color: #9a66df;
  }
`;

export const Nav = styled.nav`
  display: flex;
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  font-weight: 500;
  border-radius: 4px;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    color: #ffffff;
    background-color: #9a66df;
    /* box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16); */
  }

  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: #9a66df;
  }
`;
