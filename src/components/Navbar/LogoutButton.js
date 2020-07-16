import styled from 'styled-components';

export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  color: #dadada;
  text-decoration: none;
  cursor: pointer;
  background: none;
  border: none;
  border-radius: 50%;
  transition: .3s all cubic-bezier(.4, , .2, 1);

  &:hover,
  &:focus {
    color: #2a2d34;
    background-color: #fff;
  }
`;