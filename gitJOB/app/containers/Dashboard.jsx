import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import MainSection from 'components/MainSection';
import InfoModal from 'components/InfoModal'

import styles from 'css/components/dashboard';

import { destroyPosting} from 'actions/posting'
import { moveAppUp, moveAppDown, fetchUserJobs } from 'actions/apps'
import { openModal, closeModal } from 'actions/modals'
import Collapsible from 'react-collapsible'


/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const cx = classNames.bind(styles)

class Dashboard extends Component {
  
  render() {
    const { 
      applications, moveAppUp, 
      destroyPosting, openModal, closeModal, 
      fetchUserJobs, modalState, activeJob, activeStaff } = this.props; 
    
    console.log(activeStaff)

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
        <Collapsible 
          classParentString={cx('Collapsible')}
          triggerText="Queued"
          easing="ease"
          open={true}
          transitionTime={200}>
        <MainSection
          jobs={queueAdd}
          applications={applications}
          openModal={openModal}
          onIncrement={moveAppUp}
          deny={destroyPosting}/>
        </Collapsible>
        <Collapsible 
          classParentString={cx('Collapsible')}
          triggerText="Applied"
          easing="ease"
          transitionTime={200}>
        <MainSection          
          jobs={queueApply}
          onIncrement={moveAppUp}
          openModal={openModal}
          deny={destroyPosting}/>
        </Collapsible>
        <Collapsible 
          classParentString={cx('Collapsible')}
          triggerText="Phone"
          easing="ease"
          transitionTime={200}>
        <MainSection
          header={"Phone"}
          jobs={queuePhone}
          onIncrement={moveAppUp}
          openModal={openModal}
          deny={destroyPosting}/>
        </Collapsible>
        <Collapsible 
          classParentString={cx('Collapsible')}
          triggerText="Code"
          easing="ease"
          transitionTime={200}>
        <MainSection
          header={"Code"}
          jobs={queueChallenge}
          onIncrement={moveAppUp}
          openModal={openModal}
          deny={destroyPosting}/>        
        </Collapsible>
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
    activeJob: state.modal.activeJob,
    activeStaff: state.modal.activeStaff
  }
}

export default connect(mapStateToProps, {
  moveAppUp, destroyPosting, openModal, closeModal, fetchUserJobs})(Dashboard);
