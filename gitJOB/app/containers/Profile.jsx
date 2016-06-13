import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';

import { ButtonCircle } from 'rebass'
import Icon from 'react-geomicons'

import { fetchUserJobs } from 'actions/apps'
import styles from 'css/components/profile';

const cx = classNames.bind(styles);

class Profile extends Component {
  
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
      <div>
      <h3>{applications.filter(e => this.filterQueue(e)).length}</h3>
      <ButtonCircle backgroundColor="blue" onClick={this.increment} title="Queue">
          <Icon                
            fill="currentColor"
            height="1em"
            name="clock"
            width="2em"/>                
        </ButtonCircle>     
      </div>
    )
  }


  render() {    
    const { 
      applications, fetchUserJobs
    } = this.props

    console.log(applications, "THESE ARE THE APPLICATIONS. ARE THEY FILTERED BY USER")

    return (
      <div className={cx('info')}>
        <img className={cx('picture')} src='https://gravatar.com/avatar/7c18743922ab826d83cc40ef0493c5cb?d=https://hackaday.io/img/default-gravatar.png&r=x&s=400'/>
        <h3>Username</h3>
        <table>
          <tbody>
          <tr className={cx('row')}>
            <td>{this.renderButton()}</td>
            <td><h3>{applications.filter(e => this.filterApply(e)).length}</h3>Applied</td>
          </tr>          
          </tbody>
        </table>
        
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
    applications: state.applications.applications
  }
}

export default connect(mapStateToProps, {fetchUserJobs})(Profile);