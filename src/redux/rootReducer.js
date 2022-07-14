import { combineReducers } from 'redux';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
