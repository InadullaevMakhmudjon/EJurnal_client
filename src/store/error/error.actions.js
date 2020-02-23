import * as types from './error.actionTypes';

export const openSnackbar = (message) => ({
  type: types.OPENSNACKBAR,
  payload: message,
});

export const closeSnackbar = () => ({
  type: types.CLOSESNACKBAR,
});

export const openDialog = (message) => ({
  type: types.OPENDIALOG,
  payload: message,
});

export const closeDialog = () => ({
  type: types.CLOSEDIALOG,
});
