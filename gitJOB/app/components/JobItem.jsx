import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import {Popover, OverlayTrigger} from 'react-bootstrap'
import styles from 'css/components/topic-item';
import moment from 'moment'

const cx = classNames.bind(styles);

// Buttons
import { ButtonCircle } from 'rebass'
import Icon from 'react-geomicons'

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
    const { id, job, deny } = this.props;    
    deny(id, job);
  }

  showData() {
    const { id, index, job, openModal } = this.props;    
    openModal(job)
  }

  render() {
    let popover = <Popover id={this.props.job._id} placement="top" title={this.props.job.location}>{this.props.job.tagline}</Popover>;    
    return (
      <OverlayTrigger overlay={popover}>
      <li className={cx('topic-item')} key={this.props.id}>        
          <a href='#' onClick={this.showData} className={cx('topic')}>
            {this.props.text}
          </a>                
        <div className={cx('circle')}>
        <ButtonCircle backgroundColor="red" onClick={this.onDestroyClick} title="Remove">
          <Icon                
            fill="currentColor"
            height="1em"
            name="close"
            width="2em"/>                
        </ButtonCircle>        
        <ButtonCircle backgroundColor="green" onClick={this.increment} title="Add">
          <Icon                
            fill="currentColor"
            height="1em"
            name="star"
            width="2em"/>                
        </ButtonCircle>      
        </div>
      </li>      
      </OverlayTrigger>                                
    );
  }
}

JobItem.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  deny: PropTypes.func.isRequired
};
