import React, { PropTypes } from 'react';
import JobItem from 'components/JobItem';
import classNames from 'classnames/bind';
import styles from 'css/components/main-section';

// Modal Components 
const cx = classNames.bind(styles);

const MainSection = (
  {onIncrement, onDecrement, 
    openModal, closeModal, modalState, onDestroy, 
    jobs, header, applications}) => {  

  const jobItems = jobs.map((job, key) => {    
    return (
      <JobItem index={key}
        job={job}
        id={job._id}        
        key={key}
        applications={applications}        
        modalState={modalState}
        openModal={openModal}
        text={job.job_title}                
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onDestroy={onDestroy}/>);
    });  
  return (
    <div className={cx('main-section')}>
      <h3 className={cx('header')}><span>{header}</span><span>{jobs.length}</span></h3>
      <ul className={cx('list')}>{jobItems}</ul>            
    </div>
  );
};

MainSection.propTypes = {
  jobs: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired,
  openModal:PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired1
};

export default MainSection;

// date={job._id].status.queueDate}