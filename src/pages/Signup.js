import React from 'react';
import { Field, Form, Button, Title, AuthContainer } from '../components';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <AuthContainer>
      <Form>
        <Title>Signup</Title>
        <Field>Username</Field>
        <Field>Password</Field>
        <Field>Confirm Password</Field>
        <Button>Signup</Button>
        <p>
          Already have an account? <Link to='/login'>Login</Link>
        </p>
      </Form>
    </AuthContainer>
  );
};

export default Signup;
