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
          <img className={cx('person-img')} src={element.img_url}/>
      </ButtonCircle>        
      <div className={'staff-data'}>
        <p><strong>Name: {element.name}</strong></p>
        <p>Title: {element.title}</p>                
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

