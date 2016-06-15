import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { ButtonCircle } from 'rebass'
import Icon from 'react-geomicons'

import { fetchUserJobs } from 'actions/apps'
import styles from 'css/components/profile';

const cx = classNames.bind(styles);

const Profile = ({applications, user}) => {  
  applications = applications || []
  const filterQueue = (app) => {
    return app.interest === 1
  }

  const filterApply = (app) => {
    return app.interest === 2
  }

  const filterPhone = (app) => {
    return app.interest === 3
  }

  const filterTech = (app) => {
    return app.interest === 4
  }

  const renderButton = () => {    
    return (      
      <div>
      <h3>{applications.filter(e => filterQueue(e)).length} queue</h3>            
      <h3>{applications.filter(e => filterApply(e)).length} apply</h3>            
      <h3>{applications.filter(e => filterPhone(e)).length} phone calls</h3>            
      <h3>{applications.filter(e => filterTech(e)).length} tech screens</h3>            
      </div>
    )
  }
    return (
      <div className={cx('info')}>
        <img className={cx('picture')} src='https://gravatar.com/avatar/7c18743922ab826d83cc40ef0493c5cb?d=https://hackaday.io/img/default-gravatar.png&r=x&s=400'/>
        <h3>{user}</h3>            
        {renderButton()}              
      </div>
    )    
}




export default Profile;