import React, { PropTypes } from 'react';
import JobItem from 'components/JobItem';
import classNames from 'classnames/bind';
import styles from 'css/components/main-section';

const cx = classNames.bind(styles);

const MainSection = ({onIncrement, onDecrement, onDestroy, jobs, header}) => {
  const jobItems = jobs.map((job, key) => {
    return (
      <JobItem index={key}
        job={job}
        id={job._id}
        key={key}
        text={job.job_title}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDestroy={onDestroy} />);
    });

  return (
    <div className={cx('main-section')}>
      <h3 className={cx('header')}>{header}</h3>
      <ul className={cx('list')}>{jobItems}</ul>
    </div>
  );
};

MainSection.propTypes = {
  jobs: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired
};

export default MainSection;
