import * as types from './user.actionTypes';

const user = localStorage.getItem('user');

const INITIAL_STATE = {
  token: localStorage.getItem('token'),
  user: user ? JSON.parse(user) : null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.USER_LOGOUT:
      return {
        token: null,
        user: null,
      };
    case types.USER_LOGIN:
      return {
        ...state,
        token: action.payload,
      };
    case types.USER_SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
