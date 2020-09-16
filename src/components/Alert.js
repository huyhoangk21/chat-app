import styled, { css } from 'styled-components';

const Alert = styled.div`
  color: ${props => props.theme.white};
  position: absolute;
  top: 100px;
  min-width: 350px;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${props =>
    props.error &&
    css`
      background-color: ${props => props.theme.error};
    `}
  ${props =>
    props.success &&
    css`
      background-color: ${props => props.theme.success};
    `}
`;

export default Alert;
