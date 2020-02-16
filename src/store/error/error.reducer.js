import * as types from './error.actionTypes';

const INITIAL_STATE = {
  open: true,
  message: '',
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
    default:
      return state;
  }
};
