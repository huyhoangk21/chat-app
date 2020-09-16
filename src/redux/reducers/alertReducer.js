import { ERROR, SUCCESS, CLEAR } from '../types';

const initialState = { error: null, success: null };

const alertReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ERROR:
      return { error: payload, success: null };
    case SUCCESS:
      return { error: null, success: payload };
    case CLEAR:
      return {
        error: null,
        success: null,
      };
    default:
      return state;
  }
};

export default alertReducer;
