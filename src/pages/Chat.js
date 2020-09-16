import React, { useState } from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/actions';
import {
  ChatContainer,
  Header,
  Title,
  Button,
  Field,
  RoomForm,
  Input,
  Label,
  ChatBox,
  Icon,
  MyMessage,
  OthersMessage,
} from '../components';
const Chat = ({ user, logout }) => {
  const [chat, setChat] = useState(false);
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const onRoomSubmit = e => {
    e.preventDefault();
    //connect socket here
    if (!room) return;

    setTimeout(() => setChat(true), 400); //delay
  };

  const closeChat = () => {
    // disconnect socket here

    setRoom('');
    setChat(false);
  };

  const onMessageSubmit = e => {
    e.preventDefault();
    if (!message) return;
    setMessages([...messages, <MyMessage>{message}</MyMessage>]);
    setMessage('');
  };

  return (
    <ChatContainer dark={chat}>
      <Header>
        <Title header>Welcome {user.user}</Title>
        <Button animated onClick={logout}>
          <span>Logout</span>
        </Button>
      </Header>
      <RoomForm
        onSubmit={onRoomSubmit}
        autoComplete='off'
        className={chat ? 'inactive' : 'active'}>
        <Field>
          <Input
            type='test'
            id='room'
            name='room'
            placeholder=' '
            value={room}
            onChange={e => setRoom(e.target.value)}
          />
          <Label htmlFor='password'>Room</Label>
        </Field>
        <Button className='control-button' type='submit'>
          Enter
        </Button>
      </RoomForm>
      <ChatBox className={chat ? 'active' : 'inactive'}>
        <ChatBox.Header>
          <Title>Room: {room}</Title>
          <Icon className='fas fa-times' onClick={closeChat} />
        </ChatBox.Header>
        <ChatBox.Content>{messages}</ChatBox.Content>
        <ChatBox.Form onSubmit={onMessageSubmit} autoComplete='off'>
          <ChatBox.Message
            type='text'
            id='message'
            name='message'
            value={message}
            onChange={e => setMessage(e.target.value)}
          />
          <Button type='submit' disabled={!message}>
            Send
          </Button>
        </ChatBox.Form>
      </ChatBox>
    </ChatContainer>
  );
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps, { logout })(Chat);
