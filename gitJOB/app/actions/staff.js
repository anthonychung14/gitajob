/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'types';
import moment from 'moment'

polyfill();

export function makeStaffEntry(method, id, data, api = '/company') {
  console.log("IF I AM RUN, I WILL BE HERE <<<<<<<<<<<<<")
  return request[method](api + (id ? ('/' + id) : ''), data);
}

export function addEntry(props, companyId) {    
  return dispatch => {
   return makeStaffEntry('post', companyId, props)
    .then(response => dispatch(receiveEntry(response)))
  }
}

export function fetchStaff() {
  return {
    type: type.GET_STAFF,
    promise: makeStaffRequest('get')
  }
}