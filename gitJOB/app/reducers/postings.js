import {
  TYPING,
  DESTROY_POSTING,
  GET_POSTING_REQUEST,      
  GET_POSTING_SUCCESS,
  GET_POSTING_FAILURE } from 'types';


export default function postings(state = {
  jobs: []
}, action) {
  switch (action.type) {
    case TYPING:
      return Object.assign({}, state,
        { newTopic: action.newTopic }
      );
    case GET_POSTING_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_POSTING_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        jobs: action.req.data
      });
    case GET_POSTING_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });    
    case DESTROY_POSTING:
      const postings = state.jobs
      const updatedJobs = postings.filter((element) => {
        return element._id !== action.id
      })                  
      return {
        jobs: updatedJobs        
      };    
    default:
      return state;
  }
}