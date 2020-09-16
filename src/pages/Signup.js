import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signup } from '../redux/actions';
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

const Signup = ({ signup }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const onFormSubmit = e => {
    e.preventDefault();
    signup(username, password, password2);
  };

  return (
    <AuthContainer>
      <Form autoComplete='off' onSubmit={onFormSubmit}>
        <Title>Signup</Title>
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
        <Field>
          <Input
            type='password'
            id='password2'
            name='password2'
            placeholder=' '
            value={password2}
            onChange={e => setPassword2(e.target.value)}
          />
          <Label htmlFor='password2'>Confirm Password</Label>
        </Field>
        <Button>Signup</Button>
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </Form>
    </AuthContainer>
  );
};

export default connect(null, { signup })(Signup);
