import React, { PropTypes } from 'react';
import JobItem from 'components/JobItem';
import classNames from 'classnames/bind';
import {Popover, OverlayTrigger} from 'react-bootstrap'
import styles from 'css/components/company-jobs';
import Collapsible from 'react-collapsible'

const cx = classNames.bind(styles);

const CompanyJobs = (
{ onIncrement, deny, 
    openModal, modalState, 
    jobs, header, applications, company, key }
) => {

 const jobItems = jobs.map((job, key) => {    
    return (      
      <JobItem index={key}
        job={job}
        id={job._id}        
        key={job._id}
        applications={applications}        
        modalState={modalState}
        openModal={openModal}
        text={job.job_title}                
        onIncrement={onIncrement}
        deny={deny}/>);
    });  
  let popover = <Popover className={cx('popover')} id={company._id} placement="top" title={company.location}>{company.tagline}</Popover>;    

  const imgGen = () => {
    if(company.img) {      
        return company.img
      }      
    else {
      return (
        'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSoQ5djekzANY0slKzBMtJOkzKaE2eIJb5ZHODYevfprF_hKKk8'
      )
    }
  }

  return (                
      <OverlayTrigger overlay={popover}>
      <div className={cx('company-jobs')}>
      <img className={cx('company-img')}src={imgGen()}/>      
      <ul className={cx('list')}>        
      {jobItems}
      </ul>                        
      </div>      
      </OverlayTrigger>
  );
}

export default CompanyJobs