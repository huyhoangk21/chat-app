import React from 'react';
import {
  ChatContainer,
  Header,
  Title,
  Button,
  Field,
  Modal,
} from '../components';
const Chat = () => {
  return (
    <ChatContainer>
      <Header>
        <Title header>Welcome Name</Title>
        <Button animated>
          <span>Logout</span>
        </Button>
      </Header>
      <Button className='control-button inactive'>Enter a chat room</Button>
      <Modal>
        <Field className='field'>Enter room</Field>
        <Button className='control-button'>Enter</Button>
      </Modal>
    </ChatContainer>
  );
};

export default Chat;
