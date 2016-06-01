import { combineReducers } from 'redux';
import user from 'reducers/user';
import topic from 'reducers/topic';
import userjobs from 'reducers/applications'
import message from 'reducers/message';
import modal from 'reducers/modal';
import { routerReducer as routing } from 'react-router-redux';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  user,
  topic,
  message,
  routing,
  modal,
  userjobs
});

export default rootReducer;
