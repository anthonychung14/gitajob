import * as types from 'types';

export function openModal(job) {    
  return {
    type: types.OPEN_MODAL,
    job    
  }
}