import {
  GET_STAFF_JOBS_REQUEST,
  GET_STAFF_JOBS_SUCCESS,
  GET_STAFF_JOBS_FAILURE
} from 'types';

export function staff(state = {}, action) {

  switch(action.type) {
    case GET_STAFF_JOBS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case GET_STAFF_JOBS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_STAFF_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        entries: action.data
      });    
    default:
      return state;
  }
}