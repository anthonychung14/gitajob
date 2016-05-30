import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import EntryBox from 'components/EntryBox';
import MainSection from 'components/MainSection';
import Scoreboard from 'components/Scoreboard';
import { createTopic, typing, incrementCount,
  decrementCount, destroyTopic, fetchTopics, fetchUserJobs } from 'actions/topics';
import styles from 'css/components/vote';

const cx = classNames.bind(styles);

class Vote extends Component {

  //Data that needs to be called before rendering the component
  //This is used for server side rending via the fetchComponentDataBeforeRender() method
  static need = [  // eslint-disable-line
    fetchTopics, fetchUserJobs
  ]

  render() {
    const {newTopic, jobs, typing, createTopic, destroyTopic, incrementCount, decrementCount } = this.props;
    return (
      <div className={cx('vote')}>
        <EntryBox topic={newTopic}
          onEntryChange={typing}
          onEntrySave={createTopic} />
        <MainSection 
          header={"New Postings"}
          jobs={jobs}
          onIncrement={incrementCount}
          onDecrement={decrementCount}
          onDestroy={destroyTopic} />
      </div>
    );
  }
}

Vote.propTypes = {
  jobs: PropTypes.array.isRequired,
  typing: PropTypes.func.isRequired,
  createTopic: PropTypes.func.isRequired,
  destroyTopic: PropTypes.func.isRequired,
  incrementCount: PropTypes.func.isRequired,
  decrementCount: PropTypes.func.isRequired,
  newTopic: PropTypes.string
};

function mapStateToProps(state) {
  return {
    jobs: state.topic.jobs,
    newTopic: state.topic.newTopic
  };
}

// Read more about where to place `connect` here:
// https://github.com/rackt/react-redux/issues/75#issuecomment-135436563
export default connect(mapStateToProps, { createTopic, typing, incrementCount, decrementCount, destroyTopic })(Vote);
