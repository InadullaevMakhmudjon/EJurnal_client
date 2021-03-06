import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './rootReducer';

export default createStore(reducers, composeWithDevTools());
