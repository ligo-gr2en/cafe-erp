import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: #DADADA;
  border-radius: 50%;
  transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: white;
    color: #2A2D34;
  }

  &.${props => props.activeClassName} {
    background-color: white;
    color: #2A2D34;
  }
`;