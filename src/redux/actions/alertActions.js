import { CLEAR } from '../types';

export const clearAlert = () => dispatch => {
  dispatch({ type: CLEAR });
};
