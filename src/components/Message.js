import styled from 'styled-components';

export const MyMessage = styled.div`
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.main};
  display: inline-block;
  padding: 0.5rem;
  border-radius: 0.2rem;
  align-self: flex-end;
  margin: 0.3rem 0;
`;

export const OthersMessage = styled(MyMessage)`
  align-self: flex-start;
  color: ${props => props.theme.black};
  background-color: ${props => props.theme.gray};
`;
