import * as types from './error.actionTypes';

const INITIAL_STATE = {
  open: true,
  message: '',
  dialogOpen: false,
  dialogMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.OPENSNACKBAR:
      return {
        open: true,
        message: action.payload,
      };
    case types.CLOSESNACKBAR:
      return {
        open: false,
        message: '',
      };
    case types.OPENDIALOG:
      return {
        dialogOpen: true,
        dialogMessage: action.payload,
      };
    case types.CLOSEDIALOG:
      return {
        dialogOpen: false,
        dialogMessage: '',
      };
    default:
      return state;
  }
};
