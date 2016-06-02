import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import MainSection from 'components/MainSection';
import { InfoModal } from 'components/InfoModal'

import styles from 'css/components/dashboard';

import { decrementCount, destroyPosting, fetchUserJobs} from 'actions/topics'
import { moveAppUp } from 'actions/apps'
import { openModal } from 'actions/modals'

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const cx = classNames.bind(styles)

class Dashboard extends Component {
  render() {
    const { applications, moveAppUp, decrementCount, destroyPosting, openModal, modalState, activeJob } = this.props; 
    let queueAdd = applications.reduce((prev, curr) => {
      if (curr.interest === 1) {
        prev.push(curr.company)        
      }
      return prev
    }, [])
        
    const queueApply = applications.reduce((prev, curr) => {
      if(curr.interest === 2) {
        prev.push(curr.company)
      } 
      return prev
    }, [])

    const queuePhone = applications.reduce((prev, curr) => {
      if(curr.interest === 3) {
        prev.push(curr.company)
      } 
      return prev
    }, [])

    const queueChallenge = applications.reduce((prev, curr) => {
      if(curr.interest === 4) {
        prev.push(curr.company)
      } 
      return prev
    }, [])

    return (
      <div className={cx('dashboard')}>
        <MainSection
          header={"Queued"}
          jobs={queueAdd}
          applications={applications}
          onIncrement={moveAppUp}
          onDecrement={decrementCount}
          onDestroy={destroyPosting}
          openModal={openModal}
          modalState={modalState}/>
        <MainSection
          header={"Apply"}
          jobs={queueApply}
          onIncrement={moveAppUp}
          onDecrement={decrementCount}
          onDestroy={destroyPosting}/>
        <MainSection
          header={"Phone"}
          jobs={queuePhone}
          onIncrement={moveAppUp}
          onDecrement={decrementCount}
          onDestroy={destroyPosting}/>
        <MainSection
          header={"Code"}
          jobs={queueChallenge}
          onIncrement={moveAppUp}
          onDecrement={decrementCount}
          onDestroy={destroyPosting}/>        
        <InfoModal 
          modalState={modalState}
          openModal={openModal}
          activeJob={activeJob}/>
      </div>
    )
  }
};

Dashboard.propTypes = {
  applications: PropTypes.array.isRequired,
  destroyPosting: PropTypes.func.isRequired,
  moveAppUp: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    applications: state.userjobs.jobapps,
    modalState: state.modal.modalState,
    activeJob: state.modal.activeJob
  }
}

export default connect(mapStateToProps, {
  moveAppUp, decrementCount, destroyPosting, openModal})(Dashboard);
