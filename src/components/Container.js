import styled from 'styled-components';

const Container = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${props => props.theme.main};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
`;

export default Container;
