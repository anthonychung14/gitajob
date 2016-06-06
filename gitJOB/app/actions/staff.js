/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'types';
import moment from 'moment'

polyfill();

export function makeStaffEntry(method, id, data, api = '/company') {  
  return request[method](api + (id ? ('/' + id) : ''), data);
}

export function addEntry(props, companyId, finishfunc) {    
    console.log("add entry fired?!?!")    
    return dispatch => {
      console.log('dispatched')
      dispatch(fetchStaff)
      return makeStaffEntry('post', companyId, props)
              .then(response => {            
                console.log(response, "RESPONSE")
                // finishfunc()
                dispatch(receiveEntry(response.data))        
      })
    }
}


export function receiveEntry(response) {  
  console.log("receiveEntry SUCCESS")
  return {
    type: types.GET_STAFF_SUCCESS,
    payload: response.data
  }  
}

export function fetchStaff() {
  console.log("fired in fetch staff")
  return {
    type: type.GET_STAFF,
    promise: makeStaffRequest('get')
  }
}