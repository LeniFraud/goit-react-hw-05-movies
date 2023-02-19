import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Link = styled(NavLink)`
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &.active {
    /* color: #ffffff; */
    /* background-color: #9a66df; */
    /* box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
      1px 4px 6px rgba(0, 0, 0, 0.16); */
  }

  &:hover:not(.active),
  :focus-visible:not(.active) {
    color: #9a66df;
  }
`;
