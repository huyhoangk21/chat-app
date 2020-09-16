import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login, clearAlert } from '../redux/actions';
import {
  Field,
  Form,
  Button,
  Title,
  AuthContainer,
  Input,
  Label,
  Alert,
  Icon,
} from '../components';
import { Link, Redirect } from 'react-router-dom';
const Login = ({ user, login, alert, clearAlert }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { error, success } = alert;
  const showAlert = error || success;

  const onFormSubmit = e => {
    e.preventDefault();
    login(username, password);
  };

  if (user.token) {
    return <Redirect to='/' />;
  }

  return (
    <AuthContainer>
      {showAlert && (
        <Alert error={error} success={success}>
          {showAlert} <Icon className='fas fa-times' onClick={clearAlert} />
        </Alert>
      )}
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
        <Button type='submit'>Login</Button>
        <p>
          Don't have an account? <Link to='/signup'>Signup</Link>
        </p>
      </Form>
    </AuthContainer>
  );
};

const mapStateToProps = state => {
  return { alert: state.alert, user: state.user };
};

export default connect(mapStateToProps, { login, clearAlert })(Login);
