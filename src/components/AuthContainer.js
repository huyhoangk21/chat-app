import styled from 'styled-components';
import { Container, Form, Button } from '.';

const AuthContainer = styled(Container)`
  ${Form} {
    box-shadow: 0 0 1rem ${props => props.theme.shadow};

    ${Button} {
      display: block;
      width: 5rem;
      margin: 2rem auto;
    }

    .field {
      margin: 2rem auto 1rem;
    }

    p {
      font-size: ${props => props.theme.small};
      text-align: center;
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.main};
    }
  }
`;

export default AuthContainer;
