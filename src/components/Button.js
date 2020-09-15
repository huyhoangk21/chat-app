import styled from 'styled-components';

const Button = styled.button`
  color: white;
  background-color: ${props => props.theme.main};
  border: 1px solid ${props => props.theme.main};
  padding: 0.5rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.4s;
  &:hover,
  &:focus {
    border: 1px solid ${props => props.theme.main};
    color: ${props => props.theme.main};
    background-color: transparent;
  }
`;

export default Button;
