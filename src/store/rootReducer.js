import { combineReducers } from 'redux';
import user from './user/user.reducer';
import error from './error/error.reducer';

export default combineReducers({
  user,
  error,
});
