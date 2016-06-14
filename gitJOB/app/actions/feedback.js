import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'types';
import moment from 'moment'

polyfill()

export function postFeedback(props) {  
  fetch('/feedback', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(props)
  })
  .then((res) => {
    console.log("sending to the login/register page", res)
  })
}