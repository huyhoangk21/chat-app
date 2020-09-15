import styled from 'styled-components';
import { Button, Field } from '.';
const RoomForm = styled.form`
  border: 1px solid ${props => props.theme.gray};
  height: 150px;
  width: 80%;
  max-width: 400px;
  padding: 2rem;

  &:focus-within {
    border: 1px solid ${props => props.theme.main};
  }

  ${Field} {
    margin: 0.5rem auto 0;
  }
  ${Button} {
    display: block;
    width: 5rem;
    margin: 1rem auto 0;
  }
`;

export default RoomForm;
