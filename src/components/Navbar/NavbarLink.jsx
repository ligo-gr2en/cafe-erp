import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: #dadada;
  text-decoration: none;
  background-color: transparent;
  border-radius: 50%;
  transition: .3s all cubic-bezier(.4, , .2, 1);

  &:hover,
  &:focus {
    color: #2a2d34;
    background-color: #fff;
  }

  &.${props => props.activeClassName} {
    color: #2a2d34;

    &::before {
      position: absolute;
      top: -24px;
      right: -19px;
      z-index: 1;
      width: 77px;
      height: 96px;
      content: "";

      background-image: url("assets/images/active.svg");
      background-repeat: no-repeat;
      background-position: center;
    }

    & > i {
      z-index: 2;
    }
  }
`;
