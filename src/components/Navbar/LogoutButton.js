import styled from 'styled-components';

export default styled.button`
  height: 48px;
  width: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  background: none;
  color: #DADADA;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.3s all cubic-bezier(0.4, 0.0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: white;
    color: #2A2D34;
  }
`;