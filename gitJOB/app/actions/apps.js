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

export function makeUserJobRequest(method, id, data, api = '/apps') {
  return request[method](api + (id ? ('/' + id) : ''), data);
}

export function increment(id) {
  return { type: types.INCREMENT_COUNT, id };
}

export function decrement(id) {
  return { type: types.DECREMENT_COUNT, id };
}

export function moveAppDown(id, job) {
  return dispatch => {
    dispatch(decrement(id))
    return makeUserJobRequest('post', id, job)
    .then(res => {
      return res
    });    
  }
}

export function moveAppUp(id, job) {  
  return dispatch => {
    dispatch(increment(id))
    return makeUserJobRequest('post', id, job)
    .then(res => {
      return res
    });    
  }  
}