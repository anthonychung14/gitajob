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
      <ButtonCircle href={element.linkedin} className={cx('person-icon')} title="tag">
          <Icon                
            fill="currentColor"
            height="2em"
            name="user"
            width="2em"/>                
      </ButtonCircle>        
      <div className={'staff-data'}>
        <p><strong>Name: {element.name}</strong></p>
        <p>Title: {element.title}</p>
        <p>Email: {element.email}</p>        
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

