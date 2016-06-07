import {
  GET_STAFF_REQUEST,
  GET_STAFF_SUCCESS,
  GET_STAFF_FAILURE
} from 'types';

export default function staffReducer(state = {}, action) {
  switch(action.type) {
    case GET_STAFF_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case GET_STAFF_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_STAFF_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        entries: action.payload
      });    
    default:
      return state;
  }
}