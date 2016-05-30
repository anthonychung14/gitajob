import {
  GET_USER_JOBS_REQUEST,
  GET_USER_JOBS_SUCCESS,
  GET_USER_JOBS_FAILURE
} from 'types';


export default function applications(state = {
  applications: []
}, action) {
  switch(action.type) {
    case GET_USER_JOBS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_USER_JOBS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        jobapps: action.req.data
      });
    case GET_USER_JOBS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    
    default:
      return state
  }
}