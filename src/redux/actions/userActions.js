import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
  ERROR,
  SUCCESS,
} from '../types';
import axios from '../../api/auth';

export const login = (username, password) => async dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  try {
    const response = await axios.post('/login', {
      username,
      password,
    });
    const { token, user } = response.data;
    dispatch({ type: LOGIN_SUCCESS, payload: { token, user } });
    localStorage.setItem('token', token);
    console.log('hello');
    localStorage.setItem('user', user);
  } catch (err) {
    dispatch({ type: LOGIN_FAILURE });
    dispatch({ type: ERROR, payload: err.response.data.msg });
  }
};
export const signup = (username, password, password2) => async dispatch => {
  dispatch({ type: SIGNUP_REQUEST });
  try {
    const response = await axios.post('/signup', {
      username,
      password,
      password2,
    });
    dispatch({ type: SIGNUP_SUCCESS });
    dispatch({ type: SUCCESS, payload: response.data.msg });
  } catch (err) {
    dispatch({ type: SIGNUP_FAILURE });
    dispatch({ type: ERROR, payload: err.response.data.msg });
  }
};

export const logout = () => async dispatch => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  dispatch({ type: LOGOUT });
};
