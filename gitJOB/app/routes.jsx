import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'containers/App';
import Posting from 'containers/Posting';
import About from 'containers/About';
import LoginOrRegister from 'containers/LoginOrRegister';
import Dashboard from 'containers/Dashboard';
import Recruiters from 'containers/Recruiters'

import { filterPosition } from 'actions/filter'
import { fetchUserJobs } from 'actions/apps'

/*
 * @param {Redux Store}
 * We require store as an argument here because we wish to get
 * state from the store after it has been authenticated.
 */
export default (store) => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (!authenticated) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    store.dispatch(fetchUserJobs())    
    callback()
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { authenticated }} = store.getState();
    if (authenticated) {
      replace({
        pathname: '/postings'
      });
    }
    callback();
  }

  const changeFilter = (nextState, replace, callback) => {
    const { visFilter } = store.getState()    
    store.dispatch(filterPosition('SHOW_ALL'))    
  };
  return (
    <Route path="/" component={App}>      
      <IndexRoute component={About}/>            
      <Route path="about" component={About}/>
      <Route path="dashboard" component={Dashboard} onEnter={requireAuth} onLeave={changeFilter} />
      <Route path="postings" component={Posting} onEnter={requireAuth} onLeave={changeFilter} />
      <Route path="recruiters" component={Recruiters} />
    </Route>
  );
};

