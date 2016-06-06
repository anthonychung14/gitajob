import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/staff-card';
import { ButtonCircle } from 'rebass'
import Icon from 'react-geomicons'

const cx = classNames.bind(styles);

const StaffEntryCard = ({ staff }) => {    
  const staffItems = staff.map((element, index) => {
    return (
      <div key={index} className={cx('contact-card')}>      
      <ButtonCircle className={cx('person-icon')} title="tag">
          <Icon                
            fill="currentColor"
            height="2em"
            name="user"
            width="2em"/>                
      </ButtonCircle>        
      <div className={'staff-data'}>
        <p><strong>Bob Dole</strong></p>
        <p>Recruiter/Engineer/Warm</p>
        <p>Talked to 3 days ago</p>        
      </div>
      </div>
    )
  })

  return (
    <div>
    {staffItems}
    </div>
  )  
}

export default StaffEntryCard

