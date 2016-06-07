/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'types';
import moment from 'moment'

polyfill();

export function makeStaffRequest(method, id, data, api = '/company') {  
  return request[method](api + (id ? ('/' + id) : ''), data);
}

export function openModal(job) {    
  //something to signal that you're getting
  return dispatch => {
    console.log(job, "you think this job is here?!<<<<<<<<<<")
    let companyName = job.company
    return makeStaffRequest('get', companyName)
      .then((data) => {
        console.log(data, "data got")
        dispatch(receiveEntry(data))        
        dispatch(realModal(job))
    })
  }  
}

export function realModal(job) {  
  return {
    type: types.OPEN_MODAL,
    job    
  }
}

export function receiveEntry(response) {  
  return {
    type: types.GET_STAFF_SUCCESS,
    payload: response.data
  }  
}

//ADD NEW CONTACT FORM
export function addEntry(props, companyId, resetForm) {      
  return dispatch => {        
    return makeStaffRequest('post', companyId, props)
      .then(response => {
        dispatch(receiveEntry(response))      
        resetForm()
    })
  }
}


// return makeStaffEntry('post', companyId, props)
//             .then(response => {            
//               // finishfunc()
//               dispatch(receiveEntry(response.data))        


export function closeModal() {
  return {
    type: types.CLOSE_MODAL
  }
}