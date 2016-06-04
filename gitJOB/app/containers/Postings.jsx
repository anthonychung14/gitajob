import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import MainSection from 'components/MainSection';
import InfoModal from 'components/InfoModal'

import { createTopic, typing, addToQueue,
  decrementCount, destroyPosting, fetchTopics } from 'actions/topics';
import { fetchUserJobs } from 'actions/apps'
import { openModal, closeModal } from 'actions/modals'

import styles from 'css/components/vote';

const cx = classNames.bind(styles);

class Postings extends Component {

  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRender() method
  static need = [  // eslint-disable-line
    fetchTopics, fetchUserJobs
  ]

  render() {
    const {
      newTopic, jobs, typing, activeJob, 
      createTopic, destroyPosting, addToQueue, decrementCount, 
      openModal, closeModal, modalState } = this.props;    
    
    return (
      <div className={cx('vote')}>        
        <MainSection 
          header={"New Postings"}
          jobs={jobs}
          openModal={openModal}
          closeModal={closeModal}
          onIncrement={addToQueue}
          onDecrement={decrementCount}
          applications={jobs}
          onDestroy={destroyPosting} />
        <InfoModal 
          modalState={modalState}
          openModal={openModal}
          closeModal={closeModal}
          activeJob={activeJob}/>
      </div>
    );
  }
}

Postings.propTypes = {
  jobs: PropTypes.array.isRequired,
  typing: PropTypes.func.isRequired,
  createTopic: PropTypes.func.isRequired,
  destroyPosting: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
  addToQueue: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  newTopic: PropTypes.string

};

function mapStateToProps(state) {
  return {
    jobs: state.topic.jobs,
    newTopic: state.topic.newTopic,
    modalState: state.modal.modalState,
    activeJob: state.modal.activeJob
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, { createTopic, typing, addToQueue, decrementCount, closeModal, openModal, destroyPosting })(Postings);



// <InfoModal     
//           modalState={modalState}
//           closeModal={closeModal}
//           openModal={openModal}
//           activeJob={activeJob}/>
