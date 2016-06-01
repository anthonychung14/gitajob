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
    this.onIncrement = this.onIncrement.bind(this);
    this.onDestroyClick = this.onDestroyClick.bind(this);
    this.openModal = this.openModal.bind(this)
    this.insertDate = this.insertDate.bind(this)
  }

  onIncrement() {
    const { id, index, job, onIncrement } = this.props;
    onIncrement(id, job, index);
  }

  onDestroyClick() {
    const { id, index, job, onDestroy, openModal } = this.props;
    onDestroy(id, job, index);
  }

  openModal() {
    const { id, index, job, openModal } = this.props;    
    openModal(job)
  }

  insertDate() {
    const id = this.props.id
    const apps = this.props.applications
    for (var key in apps) {
      if(apps[key].status.queue) {
        let date = new Date(apps[key].status.queueDate)
        console.log(date.toTimeString())
        return "Hey"
      }
    }
    return "Date Missing"
  }

  render() {
    return (
      <li className={cx('topic-item')} key={this.props.id}>
        <span>{this.insertDate()} </span>        
        <span className={cx('topic')}>{this.props.text}</span>        
        
        <Button           
          onClick={this.openModal} 
          bsStyle="success"
          className={cx('button', 'destroy')}>
          <Glyphicon glyph="chevron-right" /> 
        </Button>

        <Button           
          onClick={this.onDestroyClick} 
          bsStyle="success"
          className={cx('button', 'destroy')}>
          <Glyphicon glyph="chevron-right" /> 
        </Button>

        <Button           
          onClick={this.onIncrement} 
          bsStyle="success"
          className={cx('button', 'increment')}> 
          <Glyphicon glyph="chevron-right" /> 
        </Button>        
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
