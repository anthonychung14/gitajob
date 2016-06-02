import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/topic-item';
import moment from 'moment'

const cx = classNames.bind(styles);

// Buttons
import Icon from 'react-geomicons'
import { Button, Glyphicon } from 'react-bootstrap'

export default class JobItem extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);    
    this.showData = this.showData.bind(this)
    this.onDestroyClick = this.onDestroyClick.bind(this)
  }

  increment() {
    const { id, index, job, onIncrement } = this.props;
    onIncrement(id, job, index);
  }

  onDestroyClick() {    
    const { id, job, onDestroy } = this.props;    
    onDestroy(id, job);
  }

  showData() {
    const { id, index, job, openModal } = this.props;    
    openModal(job)
  }

  render() {
    return (
      <li className={cx('topic-item')} key={this.props.id}>        
        <span className={cx('topic')}>{this.props.text}</span>                
        <button
          onClick={this.onDestroyClick}           
          className={cx('button', 'destroy')}>          
          x</button>
        <button
          onClick={this.showData}           
          className={cx('button', 'increment')}>          
          i</button>
        <button
          onClick={this.increment}           
          className={cx('button', 'increment')}>          
          +</button>
        
      </li>
    );
  }
}

JobItem.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDestroy: PropTypes.func.isRequired
};
