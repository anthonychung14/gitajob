import { combineReducers } from 'redux';
import user from 'reducers/user';
import postings from 'reducers/postings';
import applications from 'reducers/applications'
import message from 'reducers/message';
import modal from 'reducers/modal';
import visFilter from 'reducers/visFilter'
import staffReducer from 'reducers/staff'
import { reducer as formReducer } from 'redux-form'
import { routerReducer as routing } from 'react-router-redux';

// Combine reducers with routeReducer which keeps track of
// router state
const rootReducer = combineReducers({
  form: formReducer,
  user,
  postings,
  message,
  routing,
  modal,
  staff: staffReducer,
  visFilter,
  applications
});

export default rootReducer;
