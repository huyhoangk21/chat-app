import styled from 'styled-components';

const Button = styled.button`
  color: white;
  background-color: ${props => props.theme.main};
  border: none;
  padding: 0.5rem;
  text-transform: uppercase;
`;

export default Button;
