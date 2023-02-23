import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 100;
  margin-bottom: 16px;
  padding: 12px 0;
  background-color: #ebdfff;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 960px;
  min-height: 64px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Logo = styled(NavLink)`
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
    color: #8256b9;
  }
`;

export const Nav = styled.nav`
  display: flex;
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 100px;
  min-height: 40px;
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
    color: #8256b9;
  }
`;
