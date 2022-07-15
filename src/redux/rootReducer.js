import { combineReducers } from 'redux';
import providersReducer from './reducers/providers';
import skillsReducer from './reducers/skills';
import userReducer from './reducers/user';

const rootReducer = combineReducers({
  user: userReducer,
  providers: providersReducer,
  skills: skillsReducer,
});

export default rootReducer;
