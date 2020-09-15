import styled from 'styled-components';
const Header = styled.header`
  background-color: ${props => props.theme.main};
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  position: fixed;
  top: 0;
  @media screen and (min-width: 768px) {
    padding: 0 5rem;
  }
`;

export default Header;
