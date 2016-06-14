import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { ButtonCircle } from 'rebass'
import Icon from 'react-geomicons'

import { fetchUserJobs } from 'actions/apps'
import styles from 'css/components/profile';

const cx = classNames.bind(styles);

class Profile extends Component {
  static need = [  // eslint-disable-line
    fetchUserJobs
  ]

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

  renderButton() {
    const { 
      applications, fetchUserJobs
    } = this.props
    
    return (      
      <h3>{applications.filter(e => this.filterQueue(e)).length} queue</h3>            
    )
  }

  render() {    
    const { 
      applications, fetchUserJobs, user
    } = this.props

    return (
      <div className={cx('info')}>
        <img className={cx('picture')} src='https://gravatar.com/avatar/7c18743922ab826d83cc40ef0493c5cb?d=https://hackaday.io/img/default-gravatar.png&r=x&s=400'/>
        <h3>{user}</h3>            
        {this.renderButton()}              
      </div>
    )  
  }
  
}

Profile.propTypes = {
  applications: PropTypes.array.isRequired,
  fetchUserJobs: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    applications: state.applications.applications,
    user: state.applications.userName
  }
}

export default connect(mapStateToProps, {fetchUserJobs})(Profile);