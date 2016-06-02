import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'types';
import moment from 'moment'

polyfill();

export function fetchUserJobs() {
  return {
    type: types.GET_USER_JOBS,
    promise: makeUserJobRequest('get')
  };
}

export function makeUserJobRequest(method, id, data, api = '/apps/') {
  return request[method](api + (id ? ('/' + id) : ''), data);
}

export function moveAppUp(id, job, applications) {  
  return dispatch => {
    // dispatch(increment(id))
    return makeUserJobRequest('post', id, job);    
  }  
}


//Move up the chain logic