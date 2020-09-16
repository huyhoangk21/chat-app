import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { logout } from '../redux/actions';
import { v4 as uuidv4 } from 'uuid';
import {
  createSocket,
  disconnectSocket,
  sendMessage,
  receiveMessage,
} from '../socketIO';
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
  AdminMessage,
} from '../components';

const Chat = ({ user, logout }) => {
  const [chat, setChat] = useState(false);
  const [room, setRoom] = useState('');
  const [roomInput, setRoomInput] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const chatRef = useRef();
  useEffect(() => {
    createSocket(room, user.user);
    receiveMessage((err, msg, sender) => {
      if (err) return;
      const chat =
        sender === 'admin' ? (
          <AdminMessage key={uuidv4()}>{msg}</AdminMessage>
        ) : (
          <OthersMessage key={uuidv4()} sender={sender}>
            {msg}
          </OthersMessage>
        );
      setMessages(oldMessages => [...oldMessages, chat]);
    });
    return () => {
      disconnectSocket(user.user, room);
    };
  }, [room, user.user]);

  const onRoomSubmit = e => {
    e.preventDefault();
    if (!roomInput) return;
    setTimeout(() => setChat(true), 400);
    setRoom(roomInput);
  };

  const closeChat = () => {
    setRoom('');
    setMessages('');
    setChat(false);
  };

  const onMessageSubmit = e => {
    e.preventDefault();
    if (!message) return;
    setMessages(oldMessages => [
      ...oldMessages,
      <MyMessage key={uuidv4()}>{message}</MyMessage>,
    ]);
    sendMessage(room, user.user, message);
    setMessage('');
    chatRef.current.focus();
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
            id='roomInput'
            name='roomInput'
            placeholder=' '
            value={roomInput}
            onChange={e => setRoomInput(e.target.value)}
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
            ref={chatRef}
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
