import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import styles from 'css/components/profile';
const cx = classNames.bind(styles);

class Profile extends Component {

  render() {
    return (
      <div className={cx('info')}>
      <h3>Hello World</h3>
      </div>
    )  
  }
  
}

export default Profile