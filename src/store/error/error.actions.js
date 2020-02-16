import { OPENSNACKBAR, CLOSESNACKBAR } from './error.actionTypes';

export const openSnackbar = (message) => ({
  type: OPENSNACKBAR,
  payload: message,
});

export const closeSnackbar = () => ({
  type: CLOSESNACKBAR,
});
