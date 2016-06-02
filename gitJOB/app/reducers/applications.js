import {
  GET_USER_JOBS_REQUEST,
  GET_USER_JOBS_SUCCESS,
  GET_USER_JOBS_FAILURE, DECREMENT_COUNT, INCREMENT_COUNT
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
        applications: action.req.data
      });
    case GET_USER_JOBS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });

    case DECREMENT_COUNT:
      let decApps = state.applications.slice().map((element) => {
        if(element.company._id === action.company._id) {
          element.interest -= 1
        }
        return element
      })
      return Object.assign({}, state, {
        applications: decApps
      })

    case INCREMENT_COUNT:      
      let incApps = state.applications.slice().map((element) => {
        if(element.company._id === action.id) {
          element.interest += 1
        }
        return element
      })
      return Object.assign({}, state, {
        applications: incApps
      })    
    default:
      return state
  }
}