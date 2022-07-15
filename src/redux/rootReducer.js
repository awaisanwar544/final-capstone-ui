import { combineReducers } from 'redux';
import providersReducer from './reducers/providers';
import skillsReducer from './reducers/skills';
import userReducer from './reducers/user';
import reservationsReducer from './reducers/reservations';

const rootReducer = combineReducers({
  user: userReducer,
  providers: providersReducer,
  skills: skillsReducer,
  reservations: reservationsReducer,
});

export default rootReducer;
