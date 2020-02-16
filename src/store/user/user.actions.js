import * as types from './user.actionTypes';

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  return {
    type: types.USER_LOGOUT,
  };
};

export const login = (token) => {
  localStorage.setItem('token', token);
  return {
    type: types.USER_LOGIN,
    payload: token,
  };
};

export const setUser = (user) => {
  localStorage.setItem('user', JSON.stringify(user));
  return {
    type: types.USER_SET_USER,
    payload: user,
  };
};
