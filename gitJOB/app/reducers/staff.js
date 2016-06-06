import {
  GET_STAFF_REQUEST,
  GET_STAFF_SUCCESS,
  GET_STAFF_FAILURE
} from 'types';

export function staffReducer(state = {}, action) {
  console.log("CHECKING STAFF REDUCER TO SEE IF FIRES")
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
      console.log('inside of staff JS reducer', action.payload)
      return Object.assign({}, state, {
        isFetching: false,
        entries: action.payload.data
      });    
    default:
      return state;
  }
}