import React from 'react';
import {
  ChatContainer,
  Header,
  Title,
  Button,
  Field,
  RoomForm,
  Input,
  Label,
} from '../components';
const Chat = () => {
  const onFormSubmit = e => {
    e.preventDefault();
    //connect socket here
  };

  return (
    <ChatContainer>
      <Header>
        <Title header>Welcome Name</Title>
        <Button animated>
          <span>Logout</span>
        </Button>
      </Header>
      <RoomForm onSubmit={onFormSubmit} autoComplete='off'>
        <Field>
          <Input type='test' id='room' name='room' placeholder=' ' />
          <Label htmlFor='password'>Room</Label>
        </Field>
        <Button className='control-button'>Enter</Button>
      </RoomForm>
    </ChatContainer>
  );
};

export default Chat;
