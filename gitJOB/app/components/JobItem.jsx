import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import {Popover, OverlayTrigger} from 'react-bootstrap'
import styles from 'css/components/topic-item';
import moment from 'moment'

const cx = classNames.bind(styles);

// Buttons
import Icon from 'react-geomicons'
import { Button, Glyphicon } from 'react-bootstrap'

export default class JobItem extends Component {
  constructor(props) {
    super(props);1
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
    let popover = <Popover id={this.props.job._id} title={this.props.job.location}>{this.props.job.tagline}</Popover>;    
    return (
      <li className={cx('topic-item')} key={this.props.id}>        
        <OverlayTrigger overlay={popover}>
          <a href='#' onClick={this.showData} className={cx('topic')}>
            {this.props.text}
          </a>          
        </OverlayTrigger>                                
        <button
          onClick={this.increment}           
          className={cx('button', 'increment')}>          
          +</button>
        <button
          onClick={this.onDestroyClick}           
          className={cx('button', 'destroy')}>          
          x</button>
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
