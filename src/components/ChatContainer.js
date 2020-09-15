import styled from 'styled-components';
import { Container } from '.';

const ChatContainer = styled(Container)`
  background-color: ${props => props.theme.white};
  position: relative;

  .inactive {
    display: none;
  }

  .active {
    display: block;
  }

  .control-button {
    box-shadow: 0 0 0.5rem ${props => props.theme.shadow};
    background-position: center;
    transition: background 0.8s;

    &:hover,
    &:focus {
      background: ${props => props.theme.main}
        radial-gradient(circle, transparent 1%, ${props => props.theme.main} 1%)
        center/15000%;
      filter: brightness(1.2);
      color: ${props => props.theme.white};
    }

    &:active {
      background-size: 100%;
      background-color: ${props => props.theme.white};
      transition: background 0s;
    }
  }
`;

export default ChatContainer;
