import React from 'react';
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
const Login = () => {
  return (
    <AuthContainer>
      <Form autoComplete='off'>
        <Title>Login</Title>
        <Field>
          <Input type='text' id='username' name='username' placeholder=' ' />
          <Label htmlFor='username'>Username</Label>
        </Field>
        <Field>
          <Input
            type='password'
            id='password'
            name='password'
            placeholder=' '
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

export default Login;
