import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: #dadada;
  text-decoration: none;
  border-radius: 50%;
  transition: .3s all cubic-bezier(.4, , .2, 1);

  &:hover,
  &:focus {
    color: #2a2d34;
    background-color: #fff;
  }

  &.${props => props.activeClassName} {
    color: #2a2d34;
    background-color: #fff;
  }
`;