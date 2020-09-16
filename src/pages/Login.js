import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import {
  Field,
  Form,
  Button,
  Title,
  AuthContainer,
  Input,
  Label,
} from '../components';
import { Link } from 'react-router-dom';
const Login = ({ login }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <AuthContainer>
      <Form autoComplete='off' onSubmit={onFormSubmit}>
        <Title>Login</Title>
        <Field>
          <Input
            type='text'
            id='username'
            name='username'
            placeholder=' '
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <Label htmlFor='username'>Username</Label>
        </Field>
        <Field>
          <Input
            type='password'
            id='password'
            name='password'
            placeholder=' '
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <Label htmlFor='password'>Password</Label>
        </Field>
        <Button>Login</Button>
        <p>
          Don't have an account? <Link to='/signup'>Signup</Link>
        </p>
      </Form>
    </AuthContainer>
  );
};

export default connect(null, { login })(Login);
