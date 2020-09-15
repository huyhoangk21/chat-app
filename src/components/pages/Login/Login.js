import React from 'react';
import { Field, Form, Button, Title } from '../../elements';
import LoginContainer from './styled';
const Login = () => {
  return (
    <LoginContainer>
      <Form>
        <Title>Login</Title>
        <Field>Username</Field>
        <Field>Password</Field>
        <Button>Login</Button>
      </Form>
    </LoginContainer>
  );
};

export default Login;
