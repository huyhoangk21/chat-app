import styled from 'styled-components';
import { Button, Field } from '.';
const RoomForm = styled.form`
  height: 150px;
  width: 80%;
  max-width: 400px;
  padding: 2rem;
  background-color: ${props => props.theme.white};

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
