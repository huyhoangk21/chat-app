import styled, { css } from 'styled-components';

const Title = styled.h1`
  color: ${props => props.theme.main};
  font-size: ${props => props.theme.h1};
  text-align: center;
  ${props =>
    props.header &&
    css`
      color: ${props => props.theme.white};
    `};
`;

export default Title;
