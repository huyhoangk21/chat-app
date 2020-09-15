import styled from 'styled-components';

export const Input = styled.input`
  position: relative;
  z-index: 1;
  outline: none;
  border: none;
  width: 100%;
  padding: 0.2rem;
  overflow: hidden;
  background-color: transparent;
  font-size: ${props => props.theme.normal};
`;

export const Label = styled.label`
  color: ${props => props.theme.gray};
  font-size: ${props => props.theme.normal};
  position: absolute;
  transform-origin: 0%;
  left: 0.2rem;
  bottom: 0.2rem;
  z-index: 0;
  transition: transform 0.4s;
`;

const Field = styled.div`
  width: 70%;
  border-bottom: 1px solid ${props => props.theme.gray};
  position: relative;
  &::after {
    content: '';
    position: relative;
    display: block;
    height: 3px;
    width: 100%;
    background-color: ${props => props.theme.main};
    transform: scaleX(0);
    transform-origin: 0%;
    transition: transform 0.5s ease;
    top: 2px;
  }

  &:focus-within {
    border-color: transparent;
  }

  &:focus-within::after {
    transform: scaleX(1);
  }

  &:focus-within ${Label}, ${Input}:not(:placeholder-shown) + ${Label} {
    color: ${props => props.theme.main};
    transform: translateY(-1.5rem) scale(0.8);
  }
`;

export default Field;
