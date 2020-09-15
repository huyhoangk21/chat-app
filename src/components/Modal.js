import styled from 'styled-components';
import { Button } from '.';
const Modal = styled.div`
  border: 1px solid ${props => props.theme.main};
  height: 150px;
  width: 80%;
  max-width: 400px;
  padding: 2rem;

  .field {
    margin: 0.5rem auto 0;
  }
  ${Button} {
    display: block;
    width: 5rem;
    margin: 1rem auto 0;
  }
`;

export default Modal;
