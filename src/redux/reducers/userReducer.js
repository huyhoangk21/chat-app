import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGOUT,
} from '../types';

const token = localStorage.getItem('token') || null;
const user = localStorage.getItem('user') || null;
const initialState = { loading: false, token, user };

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true };
    case LOGIN_SUCCESS:
      return { loading: false, token: payload.token, user: payload.user };
    case LOGIN_FAILURE:
      return { loading: false, token: null, user: null };
    case SIGNUP_REQUEST:
      return { ...state, loading: true };
    case SIGNUP_SUCCESS:
      return { ...state, loading: false };
    case SIGNUP_FAILURE:
      return { ...state, loading: false };
    case LOGOUT:
      return { loading: false, token: null, user: null };
    default:
      return state;
  }
};

export default userReducer;
