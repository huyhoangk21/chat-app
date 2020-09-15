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
const Signup = () => {
  return (
    <AuthContainer>
      <Form autoComplete='off'>
        <Title>Signup</Title>
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
        <Field>
          <Input
            type='password'
            id='password2'
            name='password2'
            placeholder=' '
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

export default Signup;
