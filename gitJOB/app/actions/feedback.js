import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import { push } from 'react-router-redux';

import * as types from 'types';
import moment from 'moment'

polyfill()

export function postFeedback(props) {  
  return dispatch => {   
   return fetch('/feedback', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(props)
    })
    .then((res) => {      
      if (res.status === 200) {        
        console.log("ATTEMPTING THE THING")
        dispatch(reDirect("Thank you! Enjoy the rest of the app! :)"))
        dispatch(push('about'))
      }
      else {
        alert('Something went wrong! I will fix it. Email me about it and try signing in instead')
        dispatch(push('/about'))
      }
    })
    .catch(err => {
      alert('Something went wrong! Please email me about it and I will fix it. Try logging in instead')
      dispatch(push('/about'))
    })
  }
}

export function reDirect(message) {  
  return {
    type: types.LOGIN_SUCCESS_USER,
    message
  }
}