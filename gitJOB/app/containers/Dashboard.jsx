import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import MainSection from 'components/MainSection';
import InfoModal from 'components/InfoModal'
import FilterLink from 'components/FilterLink'

import styles from 'css/components/dashboard';

import { destroyPosting} from 'actions/posting'
import { moveAppUp, moveAppDown, fetchUserJobs } from 'actions/apps'
import { openModal, closeModal } from 'actions/modals'

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const cx = classNames.bind(styles)

class Dashboard extends Component {
  
  getUserApps ( apps, filter ) {    
    switch(filter) {
      case 'SHOW_ALL':
        return apps
      case 'SHOW_QUEUE':        
        return apps.filter(
          t => t.interest === 1
        )        
        return apps
      case 'SHOW_APPLY':
        return apps.filter(
          t => t.interest === 2
        )        
        return apps
      case 'SHOW_PHONE':
        return apps.filter(
          t => t.interest === 3
        )        
        return apps
      case 'SHOW_CODE':
        return apps.filter(
          t => t.interest === 4
        )        
        return apps
      case 'SHOW_SITE':
        return apps.filter(
          t => t.interest === 5
        )        
        return apps
      case 'SHOW_OFFER':
        return apps.filter(
          t => t.interest === 6
        )        
        return apps
      }
  }

  render() {
    const { 
      applications, moveAppUp, 
      destroyPosting, openModal, closeModal, 
      fetchUserJobs, modalState, activeJob, filter, activeStaff } = this.props; 

    console.log("filtered should be show all", filter)
    
    const filteredJobs = this.getUserApps(applications, filter).map((app, idx) => {
      return app.company
    })

    console.log(filteredJobs, "these are the filtered jobs")

    return (
      <div className={cx('dashboard')}>
        <div className={cx('filters')}>
          {' '}<FilterLink currentFilter={filter} type={'All'} filter={"SHOW_ALL"}/>{' '}
          {' '}<FilterLink currentFilter={filter} type={'Queue'} filter={"SHOW_QUEUE"}/>{' '}
          {' '}<FilterLink currentFilter={filter} type={'Apply'} filter={"SHOW_APPLY"}/>{' '}
          {' '}<FilterLink currentFilter={filter} type={'Phone'} filter={"SHOW_PHONE"}/>{' '}
          {' '}<FilterLink currentFilter={filter} type={'Code'} filter={"SHOW_CODE"}/>{' '}
        </div>        

        <MainSection
          jobs={filteredJobs}
          applications={filteredJobs}
          openModal={openModal}
          onIncrement={moveAppUp}
          deny={destroyPosting}/>
        <InfoModal 
          modalState={modalState}
          openModal={openModal}
          closeModal={closeModal}
          affirm={moveAppUp}
          staff={activeStaff}
          activeJob={activeJob}
          deny={destroyPosting}/>
      </div>
    )
  }
};

Dashboard.propTypes = {
  applications: PropTypes.array.isRequired,
  destroyPosting: PropTypes.func.isRequired,
  moveAppUp: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    applications: state.applications.applications,
    modalState: state.modal.modalState,
    filter: state.visFilter,
    activeJob: state.modal.activeJob,
    activeStaff: state.modal.activeStaff
  }
}

export default connect(mapStateToProps, {
  moveAppUp, destroyPosting, openModal, closeModal, fetchUserJobs})(Dashboard);
