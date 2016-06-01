import {
  OPEN_MODAL
} from 'types';

export default function modal(state = {
  modalState: false
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