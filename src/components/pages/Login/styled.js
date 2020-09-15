import styled from 'styled-components';
import { Container, Form, Button } from '../../elements';

const LoginContainer = styled(Container)`
  ${Form} {
    box-shadow: 0 0 0.5rem ${props => props.theme.shadow};

    ${Button} {
      display: block;
      width: 5rem;
      margin: 0 auto;
    }
  }
`;

export default LoginContainer;
