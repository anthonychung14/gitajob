import * as types from 'types';

export function openModal(job) {    
  return {
    type: types.OPEN_MODAL,
    job    
  }
}

export function closeModal() {
  return {
    type: types.CLOSE_MODAL
  }
}