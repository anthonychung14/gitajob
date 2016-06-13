import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { filterPosition } from 'actions/filter';
import styles from 'css/components/filter-link';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

let createHandlers = function(dispatch) {
  let onClick = function(node, data) {
    dispatch(filterPosition(node, data))
  };

  return {
    
    onClick,    
  };
}

class FilterLink extends Component {
  constructor(props) {
    super(props);
    this.handlers = createHandlers(this.props.dispatch);

  }

  render() {
    const { type, filter, currentFilter, children } = this.props
    if (filter === currentFilter) {
      return <span className={cx('active-span')}>{type}</span>
    }
    return (
      <a href='#'
      className={cx('inactive-anchor')}
        onClick={ (e, data) => {
          e.preventDefault()
          this.handlers.onClick(filter)          
        }}>{type}</a>
    )
  }
}

export default connect()( FilterLink );