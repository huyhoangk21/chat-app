import styled, { css } from 'styled-components';

const Button = styled.button`
  color: white;
  background-color: ${props => props.theme.main};
  border: 1px solid ${props => props.theme.main};
  padding: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s;
  outline: none;
  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.main};
    color: ${props => props.theme.main};
    background-color: transparent;
  }

  ${props =>
    props.animated &&
    css`
      filter: brightness(0.8);
      position: relative;
      border: none;

      &:hover,
      &:focus {
        color: ${props => props.theme.white};
        border: none;
        background-color: ${props => props.theme.main};
      }

      span::after,
      span::before {
        content: '';
        width: 2px;
        height: 0;
        position: absolute;
        background-color: ${props => props.theme.white};
        transition: all 0.2s;
      }

      &::after,
      &::before {
        content: '';
        width: 0;
        height: 2px;
        position: absolute;
        background-color: ${props => props.theme.white};
        transition: all 0.2s;
        transition-delay: 0.2s;
      }

      &::after {
        bottom: 0;
        left: 0;
      }

      &::before {
        top: 0;
        right: 0;
      }

      span::after {
        bottom: 0;
        right: 0;
      }

      span::before {
        top: 0;
        left: 0;
      }
      &:hover::after,
      &:focus::after,
      &:hover::before,
      &:focus::before {
        width: 100%;
      }

      &:hover span::after,
      &:focus span::after,
      &:hover span::before,
      &:focus span::before {
        height: 100%;
      }
    `}
`;

export default Button;
