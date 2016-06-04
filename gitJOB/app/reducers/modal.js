import {
  OPEN_MODAL
} from 'types';

const activeJob = {
  job_title: '',
  tagline: '',
  company: '',
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
  switch (action.type) {
    case OPEN_MODAL:
      return {
        modalState: !state.modalState,
        activeJob: action.job
      }
    default:
      return state
  }
}