import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import MainSection from 'components/MainSection';
import styles from 'css/components/dashboard';

import { incrementCount, decrementCount, destroyTopic, fetchUserJobs} from 'actions/topics'

/*
 * Note: This is kept as a container-level component,
 *  i.e. We should keep this as the container that does the data-fetching
 *  and dispatching of actions if you decide to have any sub-components.
 */
const cx = classNames.bind(styles)

class Dashboard extends Component {
  render() {
    const { applications, incrementCount, decrementCount } = this.props; 
    let queueAdd = applications.reduce((prev, curr) => {
      console.log(prev, curr, "PREV AND CURR")
      if (curr.status.queue) {
        prev.push(curr.company)        
      }
      return prev
    }, [])
        
    const queueApply = applications.reduce((prev, curr) => {
      if(curr.status.apply) {
        prev.push(curr.company)
      } 
      return prev
    }, [])

    const queuePhone = applications.reduce((prev, curr) => {
      if(curr.status.phone) {
        prev.push(curr.company)
      } 
      return prev
    }, [])

    const queueChallenge = applications.reduce((prev, curr) => {
      if(curr.status.on_site) {
        prev.push(curr.company)
      } 
      return prev
    }, [])

    return (
      <div className={cx('dashboard')}>
        <MainSection
          header={"Queued"}
          jobs={queueAdd}
          appplications={applications}
          onIncrement={incrementCount}
          onDecrement={decrementCount}
          onDestroy={destroyTopic}/>
        <MainSection
          header={"Apply"}
          jobs={queueApply}
          onIncrement={incrementCount}
          onDecrement={decrementCount}
          onDestroy={destroyTopic}/>
        <MainSection
          header={"Phone"}
          jobs={queuePhone}
          onIncrement={incrementCount}
          onDecrement={decrementCount}
          onDestroy={destroyTopic}/>
        <MainSection
          header={"Code"}
          jobs={queueChallenge}
          onIncrement={incrementCount}
          onDecrement={decrementCount}
          onDestroy={destroyTopic}/>
      </div>
    )
  }
};

Dashboard.propTypes = {
  applications: PropTypes.array.isRequired,
  destroyTopic: PropTypes.func.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    applications: state.userjobs.jobapps
  }
}

export default connect(mapStateToProps, {
  incrementCount, decrementCount, destroyTopic
})(Dashboard);
