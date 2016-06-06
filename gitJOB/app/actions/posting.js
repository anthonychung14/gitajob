/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'types';
import moment from 'moment'

polyfill();

/*
 * Utility function to make AJAX requests using isomorphic fetch.
 * You can also use jquery's $.ajax({}) if you do not want to use the
 * /fetch API.
 * Note: this function relies on an external variable `API_ENDPOINT`
 *        and isn't a pure function
 * @param Object Data you wish to pass to the server
 * @param String HTTP method, e.g. post, get, put, delete
 * @param String endpoint
 * @return Promise
 */

//FETCH JOBS LOGIC
export function fetchPostings() {
  return {
    type: types.GET_POSTING,
    promise: makeJobRequest('get')
  };
}

export function makeJobRequest(method, id, data, api = '/posting') {
  return request[method](api + (id ? ('/' + id) : ''), data);
}

export function makeNopeRequest(method, id, data, api = '/posting/nope') {
  return request[method](api + (id ? ('/' + id) : ''), data);
}

//ADD TO QUEUE LOGIC
export function increment(index) {
  return { type: types.INCREMENT_COUNT, index };
}

export function addToQueue(id, job, index) {
  return dispatch => {
    dispatch(destroy(id));    
    let application = {      
      interest: 1,
      status: {
        queue: true,
        queueDate: moment()
      },
      company: job
    }
    return makeJobRequest('post', id, application)
    .then(response => dispatch(receiveQueue(response)));    
  };
}

export function receiveQueue(data) {
    return {
      type: types.GET_USER_JOBS_SUCCESS,
      req: {data: data.data}
    }
}


export function destroy(id, job) {    
  return { 
    type: types.DESTROY_POSTING, id
  };
}



export function destroyPosting(id, job) {    
  return dispatch => {    
    dispatch(destroy(id, job));
    return makeNopeRequest('post', id, job)
    .then(res => {
      dispatch(receiveQueue(res)
      )}
    );    
  };
}

export function typing(text) {
  return {
    type: types.TYPING,
    newTopic: text
  };
}

/*
 * @param data
 * @return a simple JS object
 */
export function createTopicRequest(data) {
  return {
    type: types.CREATE_TOPIC_REQUEST,
    id: data.id,
    count: data.count,
    text: data.text
  };
}

export function createTopicSuccess() {
  return {
    type: types.CREATE_TOPIC_SUCCESS
  };
}

export function createTopicFailure(data) {
  return {
    type: types.CREATE_TOPIC_FAILURE,
    id: data.id,
    error: data.error
  };
}



// This action creator returns a function,
// which will get executed by Redux-Thunk middleware
// This function does not need to be pure, and thus allowed
// to have side effects, including executing asynchronous API calls.
export function createTopic(text) {
  return (dispatch, getState) => {
    // If the text box is empty
    if (text.trim().length <= 0) return;

    const id = md5.hash(text);
    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters
    const { topic } = getState();
    const data = {
      count: 1,
      id,
      text
    };

    // Conditional dispatch
    // If the topic already exists, make sure we emit a dispatch event
    if (topic.topics.filter(topicItem => topicItem.id === id).length > 0) {
      // Currently there is no reducer that changes state for this
      // For production you would ideally have a message reducer that
      // notifies the user of a duplicate topic
      return dispatch(createTopicDuplicate());
    }

    // First dispatch an optimistic update
    dispatch(createTopicRequest(data));

    return makeJobRequest('post', id, data)
      .then(res => {
        if (res.status === 200) {
          // We can actually dispatch a CREATE_TOPIC_SUCCESS
          // on success, but I've opted to leave that out
          // since we already did an optimistic update
          // We could return res.json();
          return dispatch(createTopicSuccess());
        }
      })
      .catch(() => {
        return dispatch(createTopicFailure({ id, error: 'Oops! Something went wrong and we couldn\'t create your topic'}));
      });
  };
}

