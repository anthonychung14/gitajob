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
  activeJob
}, action = {}) {
  console.log("CHECKING MODAL REDUCER TO SEE IF FIRES")
  console.log(action, "action taken")
  switch (action.type) {

    case OPEN_MODAL:
      return {
        modalState: !state.modalState,
        activeJob: action.job
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
      console.log("$$$$$$$$$$$$$ SUCCESS")
      let finalState = Object.assign({}, state, {
        isFetching: false
      });
      finalState.activeJob = finalState.activeJob.concat(action.payload.data)
      return finalState      
    case GET_STAFF_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      });    
    default:
      return state
  }
}