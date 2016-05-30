import React, { Component, PropTypes } from 'react';
import classNames from 'classnames/bind';
import styles from 'css/components/topic-item';

const cx = classNames.bind(styles);

export default class JobItem extends Component {
  constructor(props) {
    super(props);
    this.onIncrement = this.onIncrement.bind(this);
    this.onDestroyClick = this.onDestroyClick.bind(this);
  }

  onIncrement() {
    const { id, index, job, onIncrement } = this.props;
    onIncrement(id, job, index);
  }

  onDestroyClick() {
    const { id, index, job, onDestroy } = this.props;
    onDestroy(id, job, index);
  }

  render() {
    return (
      <li className={cx('topic-item')} key={this.props.id}>
        <span className={cx('topic')}>{this.props.text}</span>
        <button className={
        cx('button', 'destroy')} 
        onClick={this.onDestroyClick}>{String.fromCharCode(215)}</button>
        <button className={
          cx('button', 'increment')
        } onClick={this.onIncrement}>+</button>        
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
