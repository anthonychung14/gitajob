import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import MainSection from 'components/MainSection';
import InfoModal from 'components/InfoModal'
import FilterLink from 'components/FilterLink'
import Profile from 'containers/Profile'

import { createTopic, typing, addToQueue,
  decrementCount, removeFromQueue, fetchPostings } from 'actions/posting';
import { fetchUserJobs } from 'actions/apps'
import { openModal, closeModal } from 'actions/modals'
import { findFront, findBack, findFull, findData } from 'actions/filter'


import styles from 'css/components/postings';

const cx = classNames.bind(styles);

class Postings extends Component {

  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRender() method
  static need = [  // eslint-disable-line
    fetchPostings, fetchUserJobs
  ]

  getPostings ( postings, filter ){    
    switch(filter) {
      case 'SHOW_ALL':
        return postings
      case 'SHOW_FRONT':        
        return postings.filter(
          t => findFront(t)        
        )        
      case 'SHOW_BACK':
        return postings.filter(
          t => findBack(t)
        )       
      case 'SHOW_FULL':
        return postings.filter(
          t => findFull(t)
        )        
      case 'SHOW_DATA':
        return postings.filter(
          t => findData(t)
        ) 
      }
  }

  render() {
    const {
      newTopic, jobs, activeJob, activeStaff,
      createTopic, removeFromQueue, addToQueue, decrementCount, 
      openModal, closeModal, modalState, filter, applications, user } = this.props;    
    
    const filteredJobs = this.getPostings(jobs, filter)

    return (
      <div className={cx('two-column')}>
        <Profile applications={applications} user={user}/>        

        <div className={cx('right-column')}>
        <div className={cx('postings')}>        
          <div className={cx('filters')}>
            {' '}<FilterLink currentFilter={filter} type={'All'} filter={"SHOW_ALL"}/>{' '}
            {' '}<FilterLink currentFilter={filter} type={'Front'} filter={"SHOW_FRONT"}/>{' '}
            {' '}<FilterLink currentFilter={filter} type={'Back'} filter={"SHOW_BACK"}/>{' '}
            {' '}<FilterLink currentFilter={filter} type={'Fullstack'} filter={"SHOW_FULL"}/>{' '}
            {' '}<FilterLink currentFilter={filter} type={'Data'} filter={"SHOW_DATA"}/>{' '}
          </div>        

          <MainSection 
            header={"New Postings"}
            jobs={filteredJobs}
            openModal={openModal}
            closeModal={closeModal}
            onIncrement={addToQueue}
            applications={filteredJobs}
            deny={removeFromQueue} />
          <InfoModal 
            modalState={modalState}
            openModal={openModal}
            closeModal={closeModal}
            affirm={addToQueue}
            staff={activeStaff}
            deny={removeFromQueue}
            activeJob={activeJob}/>
        </div>
        </div>
      </div>
    );
  }
}

Postings.propTypes = {
  jobs: PropTypes.array.isRequired,  
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  addToQueue: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    jobs: state.postings.jobs,
    modalState: state.modal.modalState,
    filter: state.visFilter,
    activeJob: state.modal.activeJob,
    activeStaff: state.modal.activeStaff,
    applications: state.applications.applications,
    user: state.applications.userName
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, 
  { addToQueue, closeModal, openModal, removeFromQueue })(Postings);