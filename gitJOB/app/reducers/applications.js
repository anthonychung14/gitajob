import {
  GET_USER_JOBS_REQUEST,
  GET_USER_JOBS_SUCCESS,
  GET_USER_JOBS_FAILURE, DECREMENT_COUNT, INCREMENT_COUNT, RECEIVE_USER_APPS
} from 'types';


export default function applications(state = {
  applications: []
}, action) {
  switch(action.type) {
    case GET_USER_JOBS_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_USER_APPS:
      return Object.assign({}, state, {
        applications: action.payload
      })
    case GET_USER_JOBS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        applications: action.req.data.data,
        userName: action.req.data.userId
      });
    case GET_USER_JOBS_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });
    case DECREMENT_COUNT:      
      let decApps = state.applications.slice().map(
        (element) => {        
          console.log(action.id, "action")
          if(element.company._id === action.id) {
            element.interest = 0
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