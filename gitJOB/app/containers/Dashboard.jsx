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

  static need = [
    fetchUserJobs
  ]

  render() {
    const { applications, incrementCount, decrementCount } = this.props; 
    const queueAdd = applications.map((element) => {
      if(element.status.queue) {
        return element.company
      }
    })

    return (
      <div className={cx('dashboard')}>
        This will be where you can see the postings that you selected        
        <MainSection
          header={"Chosen Jobs"}
          jobs={queueAdd}
          onIncrement={incrementCount}
          onDecrement={decrementCount}
          onDestroy={destroyTopic} />
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
