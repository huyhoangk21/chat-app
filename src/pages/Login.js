import React from 'react';
import { Field, Form, Button, Title, AuthContainer } from '../components';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <AuthContainer>
      <Form>
        <Title>Login</Title>
        <Field>Username</Field>
        <Field>Password</Field>
        <Button>Login</Button>
        <p>
          Don't have an account? <Link to='/signup'>Signup</Link>
        </p>
      </Form>
    </AuthContainer>
  );
};

export default Login;
