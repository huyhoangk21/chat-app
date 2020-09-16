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
} from '../components';
const Chat = ({ user, logout }) => {
  const [chat, setChat] = useState(true);

  const onFormSubmit = e => {
    e.preventDefault();
    //connect socket here
  };

  return (
    <ChatContainer>
      <Header>
        <Title header>Welcome {user.user}</Title>
        <Button animated onClick={logout}>
          <span>Logout</span>
        </Button>
      </Header>
      <RoomForm
        onSubmit={onFormSubmit}
        autoComplete='off'
        className={chat ? 'inactive' : 'active'}>
        <Field>
          <Input type='test' id='room' name='room' placeholder=' ' />
          <Label htmlFor='password'>Room</Label>
        </Field>
        <Button className='control-button'>Enter</Button>
      </RoomForm>
    </ChatContainer>
  );
};

const mapStateToProps = state => {
  return { user: state.user };
};

export default connect(mapStateToProps, { logout })(Chat);
