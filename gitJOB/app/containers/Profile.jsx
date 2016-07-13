import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { ButtonCircle } from 'rebass'
import Icon from 'react-geomicons'

import { fetchUserJobs } from 'actions/apps'
import styles from 'css/components/profile';

const cx = classNames.bind(styles);

class Profile extends Component {  
  
  // static need = [
  //   fetchUserJobs
  // ]

  componentDidMount() {
    fetchUserJobs()
  }

  filterQueue(app){
    return app.interest === 1
  }
  filterApply(app){
    return app.interest === 2
  }
  filterPhone(app){
    return app.interest === 3
  }
  filterTech(app){
    return app.interest === 4
  }

  renderButton(applications) {    
    return (      
      <div>
      <h3>{applications.filter(e => this.filterQueue(e)).length} queue</h3>            
      <h3>{applications.filter(e => this.filterApply(e)).length} apply</h3>            
      <h3>{applications.filter(e => this.filterPhone(e)).length} phone calls</h3>            
      <h3>{applications.filter(e => this.filterTech(e)).length} tech screens</h3>            
      </div>
    )
  }
  
  render(){
    const user = this.props.user || "Much code"
    const apps = this.props.applications || []    
    return (
      <div className={cx('info')}>
        <img className={cx('picture')} src='https://gravatar.com/avatar/7c18743922ab826d83cc40ef0493c5cb?d=https://hackaday.io/img/default-gravatar.png&r=x&s=400'/>
        <h3>{user}</h3>            
        {this.renderButton(apps)}              
      </div>
    )    
  }
}

export default Profile;