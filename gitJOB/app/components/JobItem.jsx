import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import {Popover, OverlayTrigger} from 'react-bootstrap'
import styles from 'css/components/job-item';
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
    return (
      <div className={cx('job-row')}>                    
      <li className={cx('job-item')} key={this.props.id}>                  
          <Icon                
        fill="currentColor"
        height="1em"
        name="triangleRight"
        width="1em"/> 
          <a href='#' onClick={this.showData} className={cx('job')}>
            {this.props.text.split(" at ")[0]}
          </a>                
        <div className={cx('circle')}>
        <ButtonCircle backgroundColor="red" onClick={this.onDestroyClick} title="Remove">
          <Icon                
            fill="currentColor"
            height="1em"
            name="close"
            width="1em"/>                
        </ButtonCircle>        
        <ButtonCircle backgroundColor="green" onClick={this.increment} title="Add">
          <Icon                
            fill="currentColor"
            height="1em"
            name="star"
            width="1em"/>                
        </ButtonCircle>      
        </div>
      </li>
      </div>      
    );
  }
}

JobItem.propTypes = {
  text: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  deny: PropTypes.func.isRequired
};
