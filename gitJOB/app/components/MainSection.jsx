import React, { PropTypes } from 'react';
import classNames from 'classnames/bind';
import CompanyJobs from 'components/CompanyJobs'
import styles from 'css/components/main-section';
import Collapsible from 'react-collapsible'

// Modal Components 
const cx = classNames.bind(styles);

const MainSection = (
  {onIncrement, deny, 
    openModal, modalState, 
    jobs, header, applications}) => {  

  let company = ''
  const allCompany = 
  jobs  
  .reduce((prev, curr) => {
    const company = curr.company
    if (!prev.hash[company]) {
      prev.hash[company] = curr
      prev.arr.push(company)
    }
    return prev
  }, {hash: {}, arr: []})
  if (applications === undefined) {
    applications = []
  }

  return (
    <div className={cx('main-section')}>
      {allCompany.arr.map((company, idx) => {                
        return (
          <div key={idx}>
          <h3 className={cx('header-company')}>{company}</h3>
          <CompanyJobs
            key={idx}
            company={allCompany.hash[company]}
            onIncrement={onIncrement}
            deny={deny}
            openModal={openModal}
            modalState={modalState}
            jobs={jobs.filter((job) => {
              return job.company === company
            })}
            header={header}            
            applications={applications.filter((job) => {
              return job.company === company
            })}
            />
          </div>
        )
      })}

    </div>
  )
  //Instead of mapping over jobItems, I will be mapping over company

  //Each company will spawn a "Company" component
    //pass the jobs, applications, etc. to it
    //all actions as well

  //Company component
    //returns the below, theoretically, when you have companies 
  
};

MainSection.propTypes = {
  jobs: PropTypes.array.isRequired,
  onIncrement: PropTypes.func.isRequired,
  deny: PropTypes.func.isRequired,
  openModal:PropTypes.func.isRequired  
};

export default MainSection;

// date={job._id].status.queueDate}

// <h3 className={cx('header')}><span>{header}</span><span>{jobs.length}</span></h3>