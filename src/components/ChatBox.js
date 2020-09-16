import styled from 'styled-components';
import { Title, Button } from '.';
const ChatBox = styled.div`
  width: 90%;
  max-width: 400px;
  border: 1px solid ${props => props.theme.main};
`;

const Header = styled.div`
  background-color: ${props => props.theme.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
  ${Title} {
    color: ${props => props.theme.white};
  }
`;
const Content = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${props => props.theme.ghostwhite};
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;
const Form = styled.form`
  display: flex;
  height: 50px;
  ${Button} {
    width: 5rem;
    border: none;
    &:hover,
    &:focus {
      color: ${props => props.theme.white};
      background-color: ${props => props.theme.main};
    }

    &:disabled {
      background-color: ${props => props.theme.gray};
    }
  }
`;
const Message = styled.input`
  resize: none;
  outline: none;
  width: 90%;
  border: none;
  font-size: ${props => props.theme.h2};
  padding: 0 0.5rem;
  border-top: 1px solid ${props => props.theme.main};
`;

ChatBox.Header = Header;
ChatBox.Content = Content;
ChatBox.Form = Form;
ChatBox.Message = Message;

export default ChatBox;
