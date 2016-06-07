import {
  OPEN_MODAL, CLOSE_MODAL,
  GET_STAFF_REQUEST,
  GET_STAFF_SUCCESS,
  GET_STAFF_FAILURE
} from 'types';

const activeJob = {
  job_title: '',
  tagline: '',
  company: '',
  company_contacts: [],
  location: '',
  salary: '',
  desc: '',
  why: '',
  last_active: '',
  company_link: ''
}

export default function modal(state = {
  modalState: false,
  activeJob,
  activeStaff: []
}, action = {}) {  
  switch (action.type) {
    case OPEN_MODAL:
      let activeJob = action.job      
      return {
        modalState: !state.modalState,
        activeJob: activeJob,
        activeStaff: [].concat(state.activeStaff)
      }
    case CLOSE_MODAL:
      return {
        modalState: false,
        activeJob
      }
    case GET_STAFF_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case GET_STAFF_SUCCESS:            
      console.log(action, "action from success")
      let finalState = Object.assign({}, state, {
        isFetching: false,
        activeStaff: action.payload
      });
      return finalState      
    case GET_STAFF_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });    
    default:
      return state
  }
}